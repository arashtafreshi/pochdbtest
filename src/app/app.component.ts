import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedNode:TreeNode;

  onSelectedNodeChange(node:TreeNode){
    this.selectedNode = node;
    console.log("appComponent",this.selectedNode);
  }


}
