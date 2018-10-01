import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InputFormService } from './services/input-form.service';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [InputFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
