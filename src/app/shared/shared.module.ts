import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTileComponent } from './feature-tile/feature-tile.component';
import { RouterModule } from '@angular/router';
import { TerminalComponent } from './terminal/terminal.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [FeatureTileComponent, TerminalComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  exports: [
    FeatureTileComponent,
    TerminalComponent,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule
  ]
})
export class SharedModule {}
