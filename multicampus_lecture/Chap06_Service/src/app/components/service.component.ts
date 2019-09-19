// service.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'service-root',
    template: `
        <a01Component></a01Component>
    `
})
export class ServiceComponent implements OnInit {
    constructor() { }
    ngOnInit(): void { }
}
