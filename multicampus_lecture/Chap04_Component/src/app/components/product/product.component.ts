// product.component.ts

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'product-root',
    template: `
        <div><a08Component></a08Component></div>
        
        <a07Component></a07Component>
        <!--
        <a06Component></a06Component>
        <a05Component></a05Component>
        -->
    `,
    styles: [`
        :host {
            display: block;
        }

        #first { position: fixed; 
            left: 100; top: 100px; 
            width: 500px, height: 300px;
        }
    `]
})
export class ProductComponent implements OnInit {
    constructor() { }
    ngOnInit(): void { }
}
