import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import PouchDB from 'pouchdb';
import PouchDBfind from 'pouchdb-find';
import { Ranking } from '../models/ranking';

const databaseName = "myPouchTestDb";
const uuidv1 = require('uuid/v1');

PouchDB.plugin(PouchDBfind);

@Injectable()
export class DbService {
  db;

  constructor() { 
    this.db = new PouchDB(databaseName);
    this.db.createIndex({
      index: {fields: ['type']}
    });
  }

  getDocumentById(id:string){
    return this.db.find(id);
  }

  //=========================================== Project ============
  createNewProject(project:Project){
    this.db.put(project);
    return this.db.get(project._id);
  }
  getProjects(includeDeleted:boolean):Promise<any>{
    return this.db.find({
      selector: {
        type: 'project'
      }
    });
  }

  async deleteProject(id:string):Promise<any>{
    let db = this.db;
    await db.get(id).then(function (doc) {
      return db.remove(doc);
    });
  }
  //=========================================== Ranking ============
  createNewRanking(ranking:Ranking){
    this.db.put(ranking);
    return this.db.get(ranking._id);
  }

  getRanking(includeDeleted:boolean):Promise<any>{
    return this.db.find({
      selector: {
        type: 'ranking'
      }
    });
  }

  async deleteRanking(id:string):Promise<any>{
    let db = this.db;
    await db.get(id).then(function (doc) {
      return db.remove(doc);
    });
  }
  
//============================================ attachments =============
  saveAttachement(id:string, name:string, contentType:string, data){
    debugger;
    let attachObj = {};
    attachObj[name] = {
      content_type: data.type,
      data: data
    }
    this.db.put({
      _id: id,
      _attachments: attachObj
    });

  }

  getFile(id:string):Promise<any>{
    return this.db.get(id,{attachments: true});
  }
}
