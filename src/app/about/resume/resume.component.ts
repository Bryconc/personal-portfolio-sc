import { Component, OnInit } from '@angular/core';
import { resume } from 'src/data/about/resume';
import { ResumeData } from './resume-data.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  /**
   * A property which references the environment variables for the project. This will be used within the template to
   * reference environment data.
   *
   * @memberof ResumeComponent
   */
  public environment = environment;

  public resumeData: ResumeData = resume;

  constructor() {}

  ngOnInit() {}
}
