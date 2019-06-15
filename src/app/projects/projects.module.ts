import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectComponent } from './project/project.component';
import { ProjectRoutingModule } from './project-routing.module';
@NgModule({
  declarations: [ProjectsComponent, ProjectComponent],
  imports: [SharedModule, CommonModule, ProjectRoutingModule]
})
export class ProjectsModule {}
