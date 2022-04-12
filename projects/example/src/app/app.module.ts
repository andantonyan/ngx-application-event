import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxApplicationEventModule } from 'ngx-application-event';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxApplicationEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
