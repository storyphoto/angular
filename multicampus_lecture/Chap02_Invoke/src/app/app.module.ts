import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { A01Invoke } from './components/A01_Invoke.component';
import { A02Invoke } from './components/A02_Invoke.component';
import { A03Invoke } from './components/A03_Invoke.component';


@NgModule({
  declarations: [
    A01Invoke, A02Invoke, A03Invoke
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [ A01Invoke, A03Invoke ]
})
export class AppModule { }
