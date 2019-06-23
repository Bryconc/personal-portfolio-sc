import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionsRoutingModule } from './positions-routing.module';
import { PositionsComponent } from './positions/positions.component';
import { SharedModule } from '../shared/shared.module';
import { PositionComponent } from './position/position.component';

@NgModule({
  declarations: [PositionsComponent, PositionComponent],
  imports: [CommonModule, SharedModule, PositionsRoutingModule]
})
export class PositionsModule {}
