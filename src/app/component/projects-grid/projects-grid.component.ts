import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.css'],
  providers: [DbService]
})
export class ProjectsGridComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectDb: DbService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectDb.getProjects(true).then(
      data => {
        console.log(data);
        this.projects = data.docs;
        console.log("projects", this.projects);
      },
      error => {
        console.error(error);
      }
    );
  }

  onEditClicked(id: string) {
    alert('Edit clicked: ' + id);
  }

  onDeleteClicked(id: string) {
    if (confirm("Delete: Are you sure?")) {
      //alert('Delete clicked: '+ id);
      this.projectDb.deleteProject(id);
      this.getProjects();
    }
  }

}
