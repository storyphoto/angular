import { Component } from '@angular/core';
import { PromiseService } from '../service/A05_promise.service';

@Component({
    selector: 'a05Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>Jumsu Service</h3>
            </div>

            <div class="card-body">
                <div *ngFor="let item of result">{{item}}</div>
            </div>

        </div>
    `,
    providers: [PromiseService]
})
export class A05Component{
    
    public result: Array<string>;

    constructor(private promise: PromiseService){ }

    ngOnInit(): void {
        this.promise.getPromise(true)
        .then(
            // 성공. resolve 함수가 전달하는 값을 받아 처리 할 함수
            (data:Array<string>) => {
                console.log(data);
                this.result = data;
            },

            // 실패. reject 함수가 전달하는 값을 받아 처리 할 함수
            (error: any) => {
                console.log(error);
            }
        )
    }
}
