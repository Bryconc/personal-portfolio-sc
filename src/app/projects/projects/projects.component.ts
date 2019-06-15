import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project.interface';
import { projects } from 'src/data/projects/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];

  constructor() {
    this.projects = projects;
  }

  ngOnInit() {}

  public getProjectLink(project: Project) {
    return `/project/${project.id}`;
  }
}
