// A05_wiki.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class WikiService {
    // https://en.wikipedia.org/w/api.php?search=JAVASCRIPT&action=opensearch&format=json&callback=JSONP_CALLBACK

    private url: string = 'https://en.wikipedia.org/w/api.php';

    // private param = new HttpParams();

    constructor(private http: HttpClient){ }

    public getData(search: string): Observable<Array<{title: string, desc: string, url: string}> | string> {
        // 파라메터 관리
        let param = new HttpParams()
        .set("search", search)
        .set("action", "opensearch")
        .set("format", "json")
        .set("callback", "JSONP_CALLBACK")
        // this.param.set("search", "JAVASCRIPT")

        return this.http.jsonp(this.url + "?" + param.toString(), "")
            .pipe(
                map( (data: string[]) => data),
                map( (data: string[]) => {
                    let wikiData: Array<{title: string, desc: string, url: string}> = [];

                    for(let i = 0; i < data[1].length; i++){
                        wikiData.push(
                            {title: data[1][i], desc: data[2][i], url: data[3][i]}
                        )
                    }

                    return wikiData;
                }),
                catchError(this.errorMethod)
            )
    }

    public errorMethod(error: HttpErrorResponse): Observable<string> {
        let msg = (error.status) ? `${error.status} / ${error.statusText}` : 'Server Error';
        let errorTxt = error.message ? error.message : msg;
        return throwError(errorTxt);
    }

}