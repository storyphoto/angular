import { Component } from '@angular/core';

@Component({
    selector: 'a01Grand',
    template: `
        <div class="card-body">
            <h3>1. 다른 컴퍼넌트의 포함 관계</h3>
        </div>
        
        <div class="card-body box">
            <h3>Grand Component</h3>
            <span>Grand Component Content</span>
        </div>
    `,
    styles: [`
        .box { border: 1px solid green; padding:10px; margin:10px; width:70%; height:70%; text-align:center; }
    `]
})
export class A01Grand { }


