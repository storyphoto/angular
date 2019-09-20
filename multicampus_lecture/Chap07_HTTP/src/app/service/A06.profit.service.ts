// A06.profit.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ProfitService {
    private url: string = "http://10.3.2.200:8080/Profit/profitList";

    constructor(private http: HttpClient){}

    public getData(year: string): Observable<string[] | string> {
        let param = new HttpParams()
            .set("year", year)

        return this.http.get(this.url + "?" + param.toString())
        .pipe(
            map( (data: string[]) => data),
            map( (data: string[]) => data['profit']),
            catchError(this.errorMethod)
        )
    }

    public errorMethod(error: HttpErrorResponse): Observable<string> {
        let msg = (error.status) ? `${error.status} / ${error.statusText}` : 'Server Error';
        let errorTxt = error.message ? error.message : msg;
        return throwError(errorTxt);
    }

}