import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>Router</h3>
            </div>

            <div class="card-body">
                <a>HOME</a> | 
                <a>HOME</a> | 
                <a>PRODUCT</a> |
                <br>

                <a>PRODUCT PARAM 10</a> | 
                <a>PRODUCT DATA</a> | 
                <a>PRODUCT ARGS</a> | 

                <a>Child</a> | 
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
                
            </div>
        </div>
    `,
})
export class AppComponent  { 

}

