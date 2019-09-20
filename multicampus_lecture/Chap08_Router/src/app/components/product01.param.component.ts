import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product-param',
    template: `
        <div class="card-body">
            <h3>Product Details for Product</h3>
            Data: {{num}}
        </div>
    `
})
export class ProductParamComponent{

}