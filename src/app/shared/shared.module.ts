import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeatureTileComponent } from './feature-tile/feature-tile.component';
import { SortComponent } from './sort/sort.component';
import { TerminalComponent } from './terminal/terminal.component';

@NgModule({
  declarations: [FeatureTileComponent, TerminalComponent, SortComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  exports: [
    FeatureTileComponent,
    TerminalComponent,
    SortComponent,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule
  ]
})
export class SharedModule {}
