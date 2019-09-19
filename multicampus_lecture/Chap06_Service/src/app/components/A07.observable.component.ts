
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'a07Component',
    template: `
    <div class="card-body">
        <div class="card-heading">
            <h3>7. Observable Event Demo</h3>
        </div>

        <div class="card-body">
            <input type="text" class="form-control" placeholder="Enter stock" [formControl]="searchInput">
        </div>
    </div>
    `,
})
export class A07Component  { 
    searchInput: FormControl = new FormControl('');

}