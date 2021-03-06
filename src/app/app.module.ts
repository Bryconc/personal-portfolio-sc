import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AboutModule } from './about/about.module';
import { ProjectsModule } from './projects/projects.module';
import { PositionsModule } from './positions/positions.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HomeModule,
    AboutModule,
    ProjectsModule,
    PositionsModule,
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
