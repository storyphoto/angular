import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { A01Component } from './components/A01.template.component';
import { A02Component } from './components/A02.expression.component';
import { A03Component } from './components/A03.binding.component';
import { A04Component } from './components/A04.binding.component';
import { A05Component } from './components/A05.ngModel.component';
import { A06Component } from './components/A06.ngIf.component';

@NgModule({
  declarations: [
    AppComponent, A01Component, A02Component, A03Component, A04Component,
    A05Component, A06Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
