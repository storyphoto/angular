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
                <a [routerLink]="['/productActive']">Activate</a> | 
                <br>

                <a [routerLink]="[ {outlets: {primary: 'subHome', two: 'content', three: 'about'}} ]">All View</a> | 
                <a [routerLink]="[ {outlets: {primary: 'subHome', two: 'content', three: null}} ]">Two View</a> | 
                <a [routerLink]="[ {outlets: {primary: 'subHome', two: null, three: null}} ]">One View</a> | 
                <br>

                <a [routerLink]="['/luxury']">Luxury</a> | 

                <a [routerLink]="['/lazy/luxuryLazy']">Luxury Lazy</a> | 
                <br>
                
                <button>HOME</button>
                <button>ARGS</button>
            </div>

            <div class="card-body">
                <!-- name을 주지 않는 경우는 기본값이 primary 이다 -->
                <router-outlet name="primary"></router-outlet>
            </div>
            <hr>

            <div class="card-body">
                <router-outlet name="two"></router-outlet>
            </div>
            <hr>

            <div class="card-body">
                <router-outlet name="three"></router-outlet>
            </div>
        </div>
    `,
})
export class AppComponent  { 

}

