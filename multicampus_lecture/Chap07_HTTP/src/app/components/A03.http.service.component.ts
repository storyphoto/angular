
import { Component } from '@angular/core';
import { A03ProductService } from '../service/A03_Product.service';

@Component({
    selector: 'a03Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>3. HTTP Service - Service</h3>
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
    providers: [
        // 매개변수가 있으면 싱글턴으로 사용할 수 없음(매개변수를 초기화 해야 함))
        {provide: A03ProductService,    useClass: A03ProductService}
    ]
})
export class A03Component  { 
   
    // View와 연결할 변수
    public products: string[];

    public constructor(private service: A03ProductService){}

    public getProduct(): void {
        this.service.getData()
        .subscribe(
            (data: string[]) => {
                this.products = data;
            },
            (error: string) => {
                console.log(error);
            }
        )
    }


}