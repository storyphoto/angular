import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyModule } from './components/company/company.module';
import { ProductModule } from './components/product/product.module';

@NgModule({
  declarations: [
    AppComponent, //CompanyComponent, ProdcutComponent
  ],
  // child module만 등록한다.
  // 사용할 수 있는 태그는 CompanyModule export에 정의된 컴퍼넌트만 사용 가능
  imports: [
    BrowserModule, CompanyModule, ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
