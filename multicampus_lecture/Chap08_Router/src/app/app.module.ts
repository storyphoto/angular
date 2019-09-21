import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// 외부 라우터 설정 파일
import { APP_ROUTER } from './components/app.router';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { ProductDetailComponent } from './components/product.component';
import { ProductParamComponent } from './components/product01.param.component';
import { ProductDataComponent } from './components/product02.data.component';
import { ProductArgsComponent } from './components/product03.args.component';
import { ProductChildComponent } from './components/product04.childMain.component';
import { SellerComponent } from './components/childComponent/seller.component';
import { DescriptionComponent } from './components/childComponent/description.component';
import { ProductActivateComponent } from './components/product05.active.component';
import { LoginGuard } from './guard/Login.service';
import { LogoutGuard } from './guard/Logout.service';
import { SubHomeComponent } from './components/company/subHome.component';
import { ContentComponent } from './components/company/content.component';
import { AboutComponent } from './components/company/about.component';
import { LuxuryModule } from './components/luxury/luxury.module';
import { NotFoundComponent } from './components/notFound.component';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProductDetailComponent, ProductParamComponent,
    ProductDataComponent, ProductArgsComponent, ProductChildComponent,
    SellerComponent, DescriptionComponent, ProductActivateComponent, 
    SubHomeComponent, ContentComponent, AboutComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule, APP_ROUTER, LuxuryModule
    // RouterModule.forRoot([
    //   { path: '',           component: HomeComponent},
    //   { path: 'home',       component: HomeComponent},
    //   { path: "product",    component: ProductDetailComponent}
    // ])
  ],
  providers: [ LoginGuard, LogoutGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
