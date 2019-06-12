import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [AboutComponent, ResumeComponent],
  imports: [CommonModule, SharedModule],
  exports: [AboutComponent]
})
export class AboutModule {}
