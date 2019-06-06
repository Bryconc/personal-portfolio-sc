import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTileComponent } from './feature-tile/feature-tile.component';
import { RouterModule } from '@angular/router';
import { TerminalComponent } from './terminal/terminal.component';

@NgModule({
  declarations: [FeatureTileComponent, TerminalComponent],
  imports: [CommonModule, RouterModule],
  exports: [FeatureTileComponent, TerminalComponent, RouterModule]
})
export class SharedModule {}
