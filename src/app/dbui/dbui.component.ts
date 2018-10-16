import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import {v4} from "uuid";
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-dbui',
  templateUrl: './dbui.component.html',
  styleUrls: ['./dbui.component.css'],
  providers: [DbService]
})
export class DbuiComponent implements OnInit {

  constructor(private dbService:DbService) { }

  ngOnInit() {
  }

  createNewProject() {
    let proj = new Project();
    proj = {
      _id: v4(),
      _rev:null,
      dateCreated: Date.now(),
      isDeleted: false,
      description: "newProject",
      name: "call me project",
      type: "project",
      dateDeleted: null,
      primaryImage: null
    }
    this.dbService.createNewProject(proj).then(function (doc) {
      console.log(doc);
    });
  }

  getProjects(){
    this.dbService.getProjects(true).then(function(docs){
      console.log(docs);
    })
  }
}
