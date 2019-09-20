// http.module.ts

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HttpClientJsonpModule } from '@angular/common/http';

import { A01Component } from './A01.http.promise.component';
import { HTTPComponent } from './http.component';
import { A02Component } from './A02.http.observable.component';
import { A03Component } from './A03.http.service.component';
import { A04Component } from './A04.weather.component';
import { A0401Component } from './A04_01.weather.component';
import { A05Component } from './A05.jsonp.component';
import { A06Component } from './A06.profit.component';

@NgModule({
    declarations: [
        A01Component, A02Component, A03Component, A04Component, A0401Component, 
        A05Component, A06Component, 
        HTTPComponent
    ],
    // HttpClientModule => HTTPService를 사용하기 위한 관련 모듈을 가지고 있음
    imports: [ CommonModule, HttpClientModule, ReactiveFormsModule, HttpClientJsonpModule ],
    exports: [ HTTPComponent ],
    providers: [ HttpClient ],
})
export class HttpChildModule {}