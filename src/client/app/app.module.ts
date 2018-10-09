import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InputFormService } from './services/input-form.service';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { OtherInfoComponent } from './other-info/other-info.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    NavigationComponent,
    AboutMeComponent,
    ProjectsComponent,
    OtherInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: InputFormComponent },
      { path: 'about', component: AboutMeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'other', component: OtherInfoComponent }
    ])
  ],
  providers: [InputFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
