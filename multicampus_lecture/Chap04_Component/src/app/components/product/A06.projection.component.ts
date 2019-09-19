import { Component } from '@angular/core';

@Component({
    selector: 'a06OneComponent',
    template: `
        <div class="card-body">
            <h5>A06 One Component</h5>

            <ng-content select=".header"></ng-content>
            <hr>
            <ng-content select=".footer"></ng-content>
        </div>
    `
})
export class A06OneComponent {

}

@Component({
    selector: 'a06Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>6. Projection</h3>
            </div>
            
            <a06OneComponent>
                <div class="header">Header Content</div>
                <div class="footer">Footer Content</div>
            </a06OneComponent>
        </div>
        
    `
})
export class A06Component {
    public name: string = 'A06 Component';
}