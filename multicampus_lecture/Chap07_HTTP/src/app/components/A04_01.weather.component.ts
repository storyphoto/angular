
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { debounceTime, switchMap, map } from 'rxjs/operators';
import { WeatherService } from '../service/A0401_weather.service';


@Component({
    selector: 'a0401Component',
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
    providers: [WeatherService]
})
export class A0401Component  { 
    
    public search: FormControl = new FormControl('', [Validators.required]);
    public temperature: string;

    constructor(public weather: WeatherService) {}

    ngOnInit(): void {
        if(!this.search.valid) {

            this.search.valueChanges
            .pipe(
                debounceTime(1000),
                switchMap( (data: string) => {
                    return this.weather.getWeather(this.search.value)
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