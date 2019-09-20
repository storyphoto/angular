import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'productChild',
    template: `
        <div class="card-boyd">
            <h3>Product Child Component</h3>
            <div>
                <p>
                    <!-- /는 Root를 의미하므로 "/seller/30" 는 에러 -->
                    <a [routerLink]="['seller/30']">Description</a> | 
                    <a [routerLink]="['desc']">Seller Info</a>
                </p>

                <router-outlet></router-outlet>
                
            </div>
        </div>
    `
})
export class ProductChildComponent{
    
}