import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpChildModule } from './components/http.module';

@NgModule({
  declarations: [
    // HttpChildModule이 등록되면 HttpChildModule의 export에 기술된 
    // HTTPComponent 여기 declarations에 자동으로 등록해 준다. 
    // 따라서 HTTPComponent가 등록되어 있다고 생각하고 작성한다
    AppComponent,     // HTTPComponent가 등록되어 있다고 생각
  ],
  imports: [
    BrowserModule, HttpChildModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
