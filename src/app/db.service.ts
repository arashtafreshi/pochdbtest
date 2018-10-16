import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import { Project } from './models/project';

const databaseName = "myPouchTestDb";
const uuidv1 = require('uuid/v1');

PouchDB.plugin(require('pouchdb-find'));

@Injectable()
export class DbService {
  db;

  constructor() { 
    this.db = new PouchDB(databaseName);
  }

  getdbInfo(): Promise<any>{
    return this.db.info();
  }

  
}
