import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public project: Project;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.loadProject(id);
    });
  }

  private loadProject(projectID: string) {
    console.log(`Loading project ${projectID}`);
    const { project } = require(`src/data/projects/project/${projectID}`);
    this.project = project;
    console.log(this.project);
  }
}
