import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTileComponent } from './feature-tile/feature-tile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FeatureTileComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FeatureTileComponent
  ]
})
export class SharedModule { }
