import { Component, OnInit, Input } from '@angular/core';
import { DbService } from '../../services/db.service';
import { TreeNode } from 'primeng/api';
import { Ranking } from '../../models/ranking';

@Component({
  selector: 'app-excel-column-list',
  templateUrl: './excel-column-list.component.html',
  styleUrls: ['./excel-column-list.component.css'],
  providers:[DbService]
})
export class ExcelColumnListComponent implements OnInit {
  columns:string[] = [];
  newColumn:string = "";
  ranking:Ranking = null;
  allColumns : string[] = [];
  checkboxes:{[col:string]:boolean} = {};

  constructor( private db: DbService) { }

  ngOnInit() {
  }

  @Input()
  set node(node: TreeNode) {
    let that = this;
      this.db.getDocumentById(node.data).then(
        data=>{
          that.ranking = data;
          that.columns = data.columns !== undefined ? data.columns : [];
        },
        error=>{
          console.error(error);
        }
      );
  }

  @Input()
  set allRankingColumns(allRankingColumns:string[]){
    let that = this;
    console.log("column list",allRankingColumns);
    this.allColumns = allRankingColumns;
    this.allColumns.forEach(function(col){
      that.checkboxes[col] = false;
    });
  }

  addColumn(){
    this.columns.push(this.newColumn);
    this.newColumn = "";
    this.ranking.columns = this.columns;
    this.db.createNewRanking(this.ranking);
    console.log(this.checkboxes);
  }


}
