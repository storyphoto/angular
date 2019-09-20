
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'http-root',
    template: `
        <a06Component></a06Component>
        <a05Component></a05Component>
        <a0401Component></a0401Component>
        <a04Component></a04Component>
        <a03Component></a03Component>
        <a02Component></a02Component>
        <a01Component></a01Component>
    `
})
export class HTTPComponent implements OnInit {
    constructor() { }
    ngOnInit(): void { }
}
