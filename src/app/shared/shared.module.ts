import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeatureTileComponent } from './feature-tile/feature-tile.component';
import { SortComponent } from './sort/sort.component';
import { TerminalComponent } from './terminal/terminal.component';
import { SortableTableComponent } from './sortable-table/sortable-table.component';

@NgModule({
  declarations: [
    FeatureTileComponent,
    TerminalComponent,
    SortComponent,
    SortableTableComponent
  ],
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
    SortableTableComponent,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [DatePipe]
})
export class SharedModule {}
