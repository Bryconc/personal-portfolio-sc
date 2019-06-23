import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionComponent } from './position/position.component';
import { PositionsComponent } from './positions/positions.component';

const routes: Routes = [
  { path: 'positions', component: PositionsComponent },
  { path: 'position/:id', component: PositionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionsRoutingModule {}
