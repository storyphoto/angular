import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'productChild',
    template: `
        <div class="card-boyd">
            <h3>Product Child Component</h3>
            <div>
                <p>
                    <a>Description</a> | 
                    <a>Seller Info</a>
                </p>

                
            </div>
        </div>
    `
})
export class ProductChildComponent{
    
}