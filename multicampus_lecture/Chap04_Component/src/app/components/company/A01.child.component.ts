import { Component } from '@angular/core';

@Component({
    selector: 'a01Child',
    template: `
        <div class="card-body">
            <h3>1. 다른 컴퍼넌트의 포함 관계</h3>
        </div>
        
        <div class="card-body box">
            <h3>Child Component</h3>
            <span>Child Component Content</span>

            <a01Grand></a01Grand>
        </div>
    `,
    styles: [`
        .box { border: 1px solid orange; padding:10px; margin:10px; width:70%; height:70%; text-align:center; }
    `]
})
export class A01Child { }


