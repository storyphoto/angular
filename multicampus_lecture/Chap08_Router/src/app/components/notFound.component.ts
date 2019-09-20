import { Component } from '@angular/core';

@Component({
    selector: 'not-found',
    template: '<h3 class="home">Dear friend, this URL was not found</h3>',
    styles:['.home {color: red;}']
})
export class NotFoundComponent{}