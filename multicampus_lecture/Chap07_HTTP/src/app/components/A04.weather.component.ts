
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { debounceTime, switchMap, map } from 'rxjs/operators';


@Component({
    selector: 'a04Component',
    template: `
    <div class="card-body">
        <div class="card-heading">
            <h3>4. Observable Weather</h3>
        </div>

        <div class="card-body">
            <input type="text" class="form-control" placeholder="Enter stock" 
                [formControl]="search"><br>
            Temperature: {{temperature}}
        </div>
    </div>
    `,
})
export class A04Component  { 
    private baseWeatherURL : string = 'http://api.openweathermap.org/data/2.5/weather?q=';
    private urlSuffix : string = '&units=metric&appid=ca3f6d6ca3973a518834983d0b318f73';
    
    public search: FormControl = new FormControl('', [Validators.required]);
    public temperature: string;

    constructor(public http: HttpClient) {}

    ngOnInit(): void {
        if(!this.search.valid) {
            this.search.valueChanges
            .pipe(
                debounceTime(1000),
                switchMap( (data:string) => {
                    return this.http.get( this.baseWeatherURL + data + this.urlSuffix )
                })
            )

            // 위에 결과를 거르는 작업을 진행
            .pipe(
                map( (data: string[]) => data['main'] ),
                map( (data: string[]) => {
                    let temp: string = data['temp'];
                    let humidity: string = data['humidity'];

                    return `Temp: ${temp}C / Humidity: ${humidity}%`;
                })
            )

            .subscribe(
                (data: string) => {
                    console.log(data);
                    this.temperature = data;
                },
                (error: HttpErrorResponse) => {
                    console.log(error);
                }
            )
        }
    }
    
}