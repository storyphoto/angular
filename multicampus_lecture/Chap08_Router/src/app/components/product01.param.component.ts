import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
    selector: 'product-param',
    template: `
        <div class="card-body">
            <h3>Product Details for Product</h3>
            Data: {{num + 100}}
        </div>
    `
})
export class ProductParamComponent{
    // View와 연결한 변수
    public num: string;

    constructor(private ac: ActivatedRoute) {}

    ngOnInit(): void {
        console.log(this.ac);
        // 문자열로 넘어온다
        // this.num = this.ac.snapshot.params['id'];

        this.ac.params
        .subscribe(
            (data: any) => {
                this.num = data['id'];
            },
            (error: any) => {
                console.log(error);
            }
        )
    }
}