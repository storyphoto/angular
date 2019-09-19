import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServcieModule } from './components/service.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ServcieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
