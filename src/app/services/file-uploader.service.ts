import { Injectable } from '@angular/core';
import { DbService } from './db.service';

const uploadFolder = "assets/Excels/";
const databaseName = "myPouchTestDb";

@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {

  constructor(private projectService: DbService) { }

  
}
