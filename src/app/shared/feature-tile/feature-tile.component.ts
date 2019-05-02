import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-tile',
  templateUrl: './feature-tile.component.html',
  styleUrls: ['./feature-tile.component.scss']
})
export class FeatureTileComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public panelLink: string;

  constructor() { }

  ngOnInit() {
  }

}
