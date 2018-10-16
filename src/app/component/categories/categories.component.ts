import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  data: any;
  selectedNode: TreeNode[];
  @Output() selectedNodeChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.getdata();
    this.selectedNode = null;
  }

  nodeSelect(event) {
    console.log(event.node);
    this.selectedNode = event.node;
    this.selectedNodeChange.emit(this.selectedNode);
  }

  getdata() {
    let dt =
      [
        {
          "label": "Research Teams",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-folder-open",
          "collapsedIcon": "fa fa-folder",
          "children": [
            {
              "label": "2018",
              "data": "Work Folder",
              "expandedIcon": "fa fa-folder-open",
              "collapsedIcon": "fa fa-folder",
              "children": [
                {
                  "label": "America",
                  "data": "Work Folder",
                  "expandedIcon": "flag-icon flag-icon-us",
                  "collapsedIcon": "flag-icon flag-icon-us",
                  "children": [
                    { "label": "All America 2018", "icon": "fa fa-file-word-o", "data": "All_America_2018" },
                    { "label": "Fixed Income 2018", "icon": "fa fa-file-word-o", "data": "Fixed_Income_2018" }
                  ]
                },
                {
                  "label": "Europe",
                  "data": "Work Folder",
                  "expandedIcon": "flag-icon flag-icon-eu",
                  "collapsedIcon": "flag-icon flag-icon-eu",
                  "children": [
                    { "label": "Expenses.doc", "icon": "fa fa-file-word-o", "data": "Expenses Document" },
                    { "label": "Resume.doc", "icon": "fa fa-file-word-o", "data": "Resume Document" }
                  ]
                },
                {
                  "label": "Asia",
                  "data": "Work Folder",
                  "expandedIcon": "fa fa-folder-open",
                  "collapsedIcon": "fa fa-folder",
                  "children": [
                    { "label": "Expenses.doc", "icon": "fa fa-file-word-o", "data": "Expenses Document" },
                    { "label": "Resume.doc", "icon": "fa fa-file-word-o", "data": "Resume Document" }
                  ]
                },
                {
                  "label": "Japan",
                  "data": "Work Folder",
                  "expandedIcon": "flag-icon flag-icon-jp",
                  "collapsedIcon": "flag-icon flag-icon-jp",
                  "children": [
                    { "label": "Expenses.doc", "icon": "fa fa-file-word-o", "data": "Expenses Document" },
                    { "label": "Resume.doc", "icon": "fa fa-file-word-o", "data": "Resume Document" }
                  ]
                },
              ]
            },
            {
              "label": "2017",
              "data": "Home Folder",
              "expandedIcon": "fa fa-folder-open",
              "collapsedIcon": "fa fa-folder",
              "children": [
                { "label": "Invoices.txt", "icon": "fa fa-file-word-o", "data": "Invoices for this month" }
              ]
            },
            {
              "label": "2016",
              "data": "Home Folder",
              "expandedIcon": "fa fa-folder-open",
              "collapsedIcon": "fa fa-folder",
              "children": [
                { "label": "Invoices.txt", "icon": "fa fa-file-word-o", "data": "Invoices for this month" }
              ]
            },
            {
              "label": "2015",
              "data": "Home Folder",
              "expandedIcon": "fa fa-folder-open",
              "collapsedIcon": "fa fa-folder",
              "children": [
                { "label": "Invoices.txt", "icon": "fa fa-file-word-o", "data": "Invoices for this month" }
              ]
            }
          ]
        },
        {
          "label": "Executive Teams",
          "data": "Pictures Folder",
          "expandedIcon": "fa fa-folder-open",
          "collapsedIcon": "fa fa-folder",
          "children": [
            { "label": "barcelona.jpg", "icon": "fa fa-file-image-o", "data": "Barcelona Photo" },
            { "label": "logo.jpg", "icon": "fa fa-file-image-o", "data": "PrimeFaces Logo" },
            { "label": "primeui.png", "icon": "fa fa-file-image-o", "data": "PrimeUI Logo" }
          ]
        },
        {
          "label": "Corporate Access Providers",
          "data": "Movies Folder",
          "expandedIcon": "fa fa-folder-open",
          "collapsedIcon": "fa fa-folder",
          "children": [
            {
              "label": "2018",
              "data": "Pacino Movies",
              "children": [
                { "label": "Scarface", "icon": "fa fa-file-video-o", "data": "Scarface Movie" },
                { "label": "Serpico", "icon": "fa fa-file-video-o", "data": "Serpico Movie" }
              ]
            },
            {
              "label": "2017",
              "data": "De Niro Movies",
              "children": [
                { "label": "Goodfellas", "icon": "fa fa-file-video-o", "data": "Goodfellas Movie" },
                { "label": "Untouchables", "icon": "fa fa-file-video-o", "data": "Untouchables Movie" }
              ]
            }
          ]
        }
      ]

    this.data = dt;
  }

}
