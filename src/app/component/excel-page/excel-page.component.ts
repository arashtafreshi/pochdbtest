import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { all } from 'q';

@Component({
  selector: 'app-excel-page',
  templateUrl: './excel-page.component.html',
  styleUrls: ['./excel-page.component.css']
})
export class ExcelPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedNode:TreeNode;
  allColumns:string[] = [];

  onSelectedNodeChange(node:TreeNode){
    this.selectedNode = node;
    console.log("appComponent",this.selectedNode);
  }

  onGotAllRankingColumns(allColumns:string[]){
    this.allColumns = allColumns;
    console.log("appComponent",this.allColumns);
  }

}
