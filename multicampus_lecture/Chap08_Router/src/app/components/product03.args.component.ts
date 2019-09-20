import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 128 page
@Component({
    selector: 'product-args',
    template: `
        <div class="card-body">
            <h3>Product Argument Component</h3>
            <div>
                Check: <br>
                Name: <br>
                Age: 
            </div>
        </div>
    `
})
export class ProductArgsComponent{
    public check: boolean;
    public name: string;
    public age: number;

    constructor(public ac: ActivatedRoute){}
}


