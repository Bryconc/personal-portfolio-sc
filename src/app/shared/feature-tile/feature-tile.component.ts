import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-tile',
  templateUrl: './feature-tile.component.html',
  styleUrls: ['./feature-tile.component.scss']
})
export class FeatureTileComponent implements OnInit {
  /**
   * The title for the feature tile. This title will be displayed prominently in the tile.
   *
   * @type {string}
   * @memberof FeatureTileComponent
   */
  @Input()
  public title: string;

  /**
   * The optional link for the tile. This will be the router link used for clicking the tile.
   *
   * @type {string}
   * @memberof FeatureTileComponent
   */
  @Input()
  public tileLink: string;

  /**
   * The optional link for the background of the feature tile. If no image link is provided,
   * a default background will be used.
   *
   * @type {string}
   * @memberof FeatureTileComponent
   */
  @Input()
  public imageLink: string;

  public useDefaultImage: boolean;

  constructor() {}

  ngOnInit() {
    this.useDefaultImage = this.imageLink === undefined;

    if (this.useDefaultImage) {
      this.imageLink = 'assets/background/3px-tile.png';
    }
  }
}
