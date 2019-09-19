// A0401_weather.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class WeatherService {
    private baseWeatherURL : string = 'http://api.openweathermap.org/data/2.5/weather?q=';
    private urlSuffix : string = '&units=metric&appid=ca3f6d6ca3973a518834983d0b318f73';
    
    constructor(public http: HttpClient) {}

    public getWeather(area: string): Observable<string[] | string> {

        return this.http.get(this.baseWeatherURL + area + this.urlSuffix)
        .pipe(
            map( (data: string[]) => data ),
            catchError(this.errorMethod)
        )

        //  위에 결과를 거르는 작업을 진행
        .pipe(
            map( (data: string[]) => data['main'] ),
            map( (data: string[]) => {
                let temp: string = data['temp'];
                let humidity: string = data['humidity'];

                return `Temp: ${temp}C / Humidity: ${humidity}%`;
            })
        )

    }

    public errorMethod(error: HttpErrorResponse): Observable<string> {
        let msg = (error.status) ? `${error.status} / ${error.statusText}` : 'Server Error';
        let errorTxt = error.message ? error.message : msg;
        return throwError(errorTxt);
    }

}