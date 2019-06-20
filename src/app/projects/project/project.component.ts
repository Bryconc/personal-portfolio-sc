import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Project } from '../shared/project.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CrossOriginHttpClientService } from 'src/app/shared/http/cross-origin-http-client.service';

const marked = require('marked/marked.min.js');

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {
  public project: Project;
  public summary: string;

  constructor(
    private route: ActivatedRoute,
    private httpClient: CrossOriginHttpClientService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.loadProject(id);
    });
  }

  private loadProject(projectID: string) {
    const { project } = require(`src/data/projects/project/${projectID}`);
    this.project = project;
    if (this.project.githubLink) {
      this.getGitHubReadme();
    } else {
      this.summary = this.project.summary;
    }
  }

  private getGitHubReadme() {
    const readMeURL = `${this.project.githubLink}/raw/master/README.md`;
    this.httpClient.getText(readMeURL).subscribe(
      data => {
        this.summary = marked(data);
      },
      _ => {
        this.summary = '';
      }
    );
  }
}
