import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as csv2json from 'csvtojson';
import { DbService } from '../../services/db.service';
import { TreeNode } from 'primeng/api';
import { Ranking } from '../../models/ranking';
import { v4 } from "uuid";


@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css'],
  providers: [HttpClient, DbService]
})
export class ExcelComponent implements OnInit {
  selectedNode: TreeNode;
  parsedData: any = null;
  rank: Ranking;
  allColumns: string[] = [];

  constructor(private http: HttpClient, private db: DbService) { }

  ngOnInit() {
    console.log("excel", this.selectedNode);
    this.selectedNode = null;
    this.rank = null;
  }

  @Output() gotAllRankingColumns: EventEmitter<any> = new EventEmitter();

  @Input()
  set node(node: TreeNode) {
    let that = this;
    this.selectedNode = node;
    this.db.getDocumentById(node.data).then(
      data => {
        debugger;
        if (data === null || data.type !== "ranking") {
          let rank: Ranking = {
            _id: node.data,
            _rev: data._rev,
            dateCreated: Date.now(),
            isDeleted: false,
            description: "newProject",
            _attachments: null,
            releaseDate: Date.now(),
            visible: true,
            year: 2018,
            type: "ranking",
            columns: []
          }
          that.rank = this.db.createNewRanking(rank);
        } else {
          that.rank = data;
          this.readExcel();
        }
      },
      error => {

      }
    );

  }



  readExcel() {
    var that = this;
    this.db.getFile(this.rank._id).then(
      data => {
        csv2json().fromString(atob(data._attachments[data._id].data)).then(
          dt => {
            console.log(dt); this.parsedData = dt;
            that.allColumns = Object.keys(this.parsedData[0]);
            this.gotAllRankingColumns.emit(that.allColumns);
            this.db.createNewRanking(that.rank);
          },
          error => { console.error(error); this.parsedData = null; }
        );
      },
      error => { console.error(error); this.parsedData = null; }
    );
  }


  handleFileInput(files: FileList) {
    this.saveFile(files);
  }

  saveFile(files: FileList) {
    for (let i = 0; i < files.length; i++) {

      this.db.saveAttachement(
        this.rank,
        "",
        files.item(i)
      );

    }
  }


  getFile() {
    console.log(this.db.getFile(this.selectedNode.data).then(
      data => { console.log(data) },
      error => { console.error(error) }
    ));
  }

}
