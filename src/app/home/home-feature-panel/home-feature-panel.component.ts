import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-feature-panel',
  templateUrl: './home-feature-panel.component.html',
  styleUrls: ['./home-feature-panel.component.scss']
})
export class HomeFeaturePanelComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public panelLink: string;

  constructor() { }

  ngOnInit() {
  }

}
