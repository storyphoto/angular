import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 128 page
@Component({
    selector: 'product-data',
    template: `
        <div class="card-body">    
            <h3>Product Data Component</h3>

            
        </div>
    `
})
export class ProductDataComponent{

    constructor(public ac: ActivatedRoute){}
    
}