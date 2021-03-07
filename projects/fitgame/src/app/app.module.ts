import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WcxUiModule } from "wcx-ui";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WcxUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
