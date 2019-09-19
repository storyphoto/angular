
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'a02Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>2. HTTP Service - Observable</h3>
            </div>
            <div class="card-body">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Expiry</th>
                    <tr>
                    <tr *ngFor="let item of products">
                        <td>{{item.name}}</td>
                        <td>{{item.category}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.expiry}}</td>
                    </tr>
                </table>
                <button class="btn btn-primary" (click)="getProduct()">Load</button>
            </div>

            <div class="card-body">
                {{products | json}}
            </div>
        
        </div>
    `,
    providers: [HttpClient]     // 생략해도 자동 주입은 해 준다
})
export class A02Component  { 

    // View와 연결할 변수
    public products: string[];
   
    constructor(private http: HttpClient){}

    public getProduct(): void {
        this.http.get("assets/resources/productData.json")
        // .toPromise()      // Observable => Promise 객체로 변경한다
        .subscribe(
            // (data: { "name": string, "category": string, "price": number, "expiry": number }[] ) =>
            (data: string[]) => {
                console.log(data);
                this.products = data;
            },
            (error: HttpErrorResponse) => {
                // console.log(error);
                let msg = (error.status) ? `${error.status} / ${error.statusText}` : 'Server Error';
                let errorTxt = error.message ? error.message : msg;
                console.log(errorTxt);
            }
        )
    }

}