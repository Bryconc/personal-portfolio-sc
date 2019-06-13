import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { commands } from 'src/data/about/terminal-commands';
import { TerminalCommand } from 'src/app/shared/terminal/terminal-command';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private name: string;
  /**
   * A property which references the environment variables for the project. This will be used within the template to
   * reference environment data.
   *
   * @memberof AboutComponent
   */
  public environment = environment;

  public commands: TerminalCommand[] = commands;

  constructor() {
    this.name = 'BryconC';
  }

  ngOnInit() {}
}
