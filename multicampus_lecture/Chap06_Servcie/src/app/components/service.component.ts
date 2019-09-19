// service.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'service-root',
    template: `
        <a07Component></a07Component>
        <a06Component></a06Component>
        <a05Component></a05Component>
        <a04Component></a04Component>
        <a03Component></a03Component>
        <a02Component></a02Component>
        <a01Component></a01Component>
    `
})
export class ServiceComponent implements OnInit {
    constructor() { }
    ngOnInit(): void { }
}
