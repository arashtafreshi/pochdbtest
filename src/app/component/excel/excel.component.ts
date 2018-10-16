import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as csv2json from 'csvtojson';
import { DbService } from '../../services/db.service';
import { TreeNode } from 'primeng/api';


@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css'],
  providers: [HttpClient, DbService]
})
export class ExcelComponent implements OnInit {
  selectedNode:TreeNode;
  parsedData:any = null;
  
  constructor(private http: HttpClient, private projectService: DbService) { }

  ngOnInit() {
    console.log("excel",this.selectedNode);
    this.selectedNode = null;
    
  }

  @Input()
  set node(node:TreeNode){
    this.selectedNode = node;
    this.readExcel2();
  }


  readEExcel() {
    this.http.get("assets/Excels/FL_insurance_sample.csv", {
      headers: new HttpHeaders({
        'Content-Type': 'text/csv',
        "Response-Type": "text/csv"
      }), responseType: 'text'
    }).subscribe(
      (data: string) => {
        csv2json().fromString(data).then(
          dt => { console.log(dt) },
          error => console.error(error)
        );
      },
      error => { console.error(error) }
    );



  }

  readExcel2(){
    this.projectService.getFile(this.selectedNode.data).then(
      data=>{
        csv2json().fromString( atob(data._attachments[data._id].data)).then(
          dt => { console.log(dt); this.parsedData = dt; },
          error => {console.error(error); this.parsedData = null;}
        );
      },
      error=>{console.error(error);this.parsedData = null;}
    );
  }


  handleFileInput(files: FileList) {
    this.saveFile(files);
  }

  saveFile(files: FileList) {
    for (let i = 0; i < files.length; i++) {

      this.projectService.saveAttachement(
        this.selectedNode.data,
        this.selectedNode.data,
        "",
        files.item(i)
      );

    }
  }


  getFile(){
    console.log(this.projectService.getFile(this.selectedNode.data).then(
      data=>{console.log(data)},
      error=>{console.error(error)}
    ));
  }

}
