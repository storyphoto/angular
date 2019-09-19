// form.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'form-root',
    template: `
        <a04Component></a04Component>
        <a03Component></a03Component>
        <a02Component></a02Component>
        <a01Component></a01Component>
    `
})
export class FormComponent implements OnInit {
    constructor() { }
    ngOnInit(): void { }
}
