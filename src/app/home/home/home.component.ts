import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /**
   * A property which references the environment variables for the project. This will be used within the template to
   * reference environment data.
   *
   * @memberof FooterComponent
   */
  public environment = environment;

  constructor() {}

  ngOnInit() {}
}
