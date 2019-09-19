
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { map } from "rxjs/operators";

@Component({
    selector: 'a07Component',
    template: `
    <div class="card-body">
        <div class="card-heading">
            <h3>7. Observable Event Demo</h3>
        </div>

        <div class="card-body">
            <input type="text" class="form-control"
                placeholder="Enter stock" [formControl]="searchInput"><br>

            {{result}}
        </div>
    </div>
    `,
})
export class A07Component  { 
    public searchInput: FormControl = new FormControl('', [Validators.required]);
    public result: string = '';

    ngOnInit(): void {
        console.log(this.searchInput);
        console.log(this.searchInput.valid);

        if(!this.searchInput.valid){
            // 발행자 => observable
            this.searchInput.valueChanges

            // 수신 후 가공 And 재 발행
            .pipe(          // 관련된 작업 단위로 묶는다
                map( (data: string) => {
                    let upper = data.toUpperCase();
                    return upper;
                }),
                
            )
            .pipe(
                map( (data: string) => data.split('') ),            // 배열로 분할
                map( (data: Array<string>) => data.reverse() ),     // 배열을 뒤집기
                map( (data: Array<string>) => data.join('') )       // 문자열로 조합
            )

            // 수진자 => observer
            .subscribe(
                (data: string) => {
                    this.result = data;
                },
                (error: any) => {
                    console.log(error);
                }
            )
        }
        
    }

}