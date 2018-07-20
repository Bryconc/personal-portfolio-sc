import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeFeaturePanelComponent } from './home-feature-panel/home-feature-panel.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HomeFeaturePanelComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
