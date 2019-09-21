import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { A01Component } from './components/A01.pipe.component';
import { A02Component } from './components/A02.custom.component';
import { UpLowerPipe } from './pipe/UpLower.pipe';
import { AbbrPipe } from './pipe/Abbr.pipe';
import { LimitToPipe } from './pipe/LimitTo.pipe';
import { ArrayLengthPipe } from './pipe/ArrayLength.pipe';

@NgModule({
  declarations: [
    AppComponent, A01Component, A02Component,

    UpLowerPipe, AbbrPipe, LimitToPipe, ArrayLengthPipe
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
