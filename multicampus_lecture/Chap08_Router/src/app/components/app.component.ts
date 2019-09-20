import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>Router</h3>
            </div>

            <div class="card-body">
                <a routerLink="">HOME</a> | 
                <a [routerLink]="['home']">HOME</a> | 
                <a [routerLink]="['product']">PRODUCT</a> |
                <br>

                <a [routerLink]="[ '/productParam', 10 ]">PRODUCT PARAM 10</a> | 
                <a [routerLink]="['/productData/200']">PRODUCT DATA</a> | 
                <a [routerLink]="['/productArgs']" [queryParams]="{check: false, name: 'NolBu', age: 30}">PRODUCT ARGS</a> | 

                <a [routerLink]="['/productChild']">Child</a> | 
                <a>Activate</a> | 
                <br>

                <a>All View</a> | 
                <a>Two View</a> | 
                <a>One View</a> | 
                <br>

                <a>Luxury</a> | 

                <a>Luxury Lazy</a> | 
                <br>
                
                <button>HOME</button>
                <button>ARGS</button>
            </div>

            <div class="card-body">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
})
export class AppComponent  { 

}

