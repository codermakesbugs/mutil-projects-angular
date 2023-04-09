import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentLibrary, MaterialModule } from 'component-library';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentLibrary,
    MaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
