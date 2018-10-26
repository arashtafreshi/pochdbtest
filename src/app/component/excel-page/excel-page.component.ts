import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

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

  onSelectedNodeChange(node:TreeNode){
    this.selectedNode = node;
    console.log("appComponent",this.selectedNode);
  }

}
