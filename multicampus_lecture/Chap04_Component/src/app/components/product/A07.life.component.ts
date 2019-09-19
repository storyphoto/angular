import { Component } from '@angular/core';

@Component({
    selector: 'a07OneComponent',
    template: `
        <div class="card-body">
            <h4>A07 One</h4>

        </div>
    `
})
export class A07OneComponent {
    public age: number = 50;

    constructor(){
        console.log(`A07 Child Constructor => ${this.age}`);
    }

    ngOnInit(): void {
        console.log(`A07 Child ngOnInit => ${this.age}`);
    }

    ngAfterContentInit(): void {
        console.log(`A07 Child ngAfterContentInit => ${this.age}`);
    }

    ngAfterContentChecked(): void {
        console.log(`A07 Child ngAfterContentChecked => ${this.age}`);
    }

    ngAfterViewInit(): void {
        console.log(`A07 Child ngAfterViewInit => ${this.age}`);
    }

    ngAfterViewChecked(): void {
        console.log(`A07 Child ngAfterViewChecked => ${this.age}`);
    }
}

@Component({
    selector: 'a07Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>A07 Component</h3>
            </div>
            <div class="card-body">
                <input type="number" class="form-control" [(ngModel)]="age">
            </div>

            <a07OneComponent></a07OneComponent>
        </div>
        
    `
})
export class A07Component {
    public age: number = 20;

    constructor(){
        console.log(`A07 Parent Constructor => ${this.age}`);
    }

    ngOnInit(): void {
        console.log(`A07 Parent ngOnInit => ${this.age}`);
    }

    ngAfterContentInit(): void {
        console.log(`A07 Parent ngAfterContentInit => ${this.age}`);
    }

    ngAfterContentChecked(): void {
        console.log(`A07 Parent ngAfterContentChecked => ${this.age}`);
    }

    ngAfterViewInit(): void {
        console.log(`A07 Parent ngAfterViewInit => ${this.age}`);
    }

    ngAfterViewChecked(): void {
        console.log(`A07 Parent ngAfterViewChecked => ${this.age}`);
    }
    
}