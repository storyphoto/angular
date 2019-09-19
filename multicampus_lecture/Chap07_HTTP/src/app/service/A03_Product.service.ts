// A03_Product.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class A03ProductService {

    // http.module에서 선언
    public constructor(private http: HttpClient){}

    public getData(): Observable<string[] | string> {
        return this.http.get("assets/resources/productData.json")
        .pipe(
            map( (data: string[]) => data),      // 성공시 전달할 데이터
            catchError(this.errorMethod)
        )
    }

    public errorMethod(error: HttpErrorResponse): Observable<string> {
        let msg = (error.status) ? `${error.status} / ${error.statusText}` : 'Server Error';
        let errorTxt = error.message ? error.message : msg;
        return throwError(errorTxt);
    }

}