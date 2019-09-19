// company.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'company-root',
    template:`
        <a04Component></a04Component>
        <a03Component></a03Component>
        <a02Component></a02Component>
        <a01Component></a01Component>
    `,
    styles: [`
    
    `]
})
export class CompanyComponent implements OnInit {
    constructor() { }
    ngOnInit(): void { }
}
