import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'a05OneComponent',
    template: `
        <div class="card-body">
            <h4>A05 One Component</h4>

            Name: <input type="text" class="form-control" [(ngModel)]="name">
            Age: <input type="text" class="form-control" [(ngModel)]="age">
            ID: <input type="text" class="form-control" [(ngModel)]="user.id">
        </div> 
    `
})
export class A05OneComponent {
    public name: string = 'Hong';
    public age: number = 20;
    public user: { id: number, name: string } = {
        id: 10,
        name: 'HongGilDong'
    }

    public greet(name: string): string {
        console.log(name);
        return name;
    }
}

@Component({
    selector: 'a05Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3 #h5>5. ViewChild</h3>
            </div>

            <div class="card-body">
                <a05OneComponent #one></a05OneComponent>
            </div>

            <div class="card-body">
                <h3>내부 변수 참조</h3>
                Name: {{name}}<br>
                Age: {{age}}<br>
                User: {{user?.id}} / {{user?.name}}<br>
                Greet: {{greet("NolBu")}}
            </div>

            <div class="card-body">
                <h3>one 변수 참조</h3>
                Name: {{one.name}}<br>
                Age: {{one.age}}<br>
                User: {{one.user?.id}} / {{one.user?.name}}<br>
                Greet: {{one.greet("HungBu")}}
            </div>

        </div>
    `
})
export class A05Component {

    @ViewChild("one") one: A05OneComponent;
    @ViewChild("h5") h5: ElementRef;

    public name: string;
    public age: number;
    public user: { id: number, name: string };
    public greet: (name: string) => string;


    public elem: HTMLHeadElement;

    ngOnInit(): void {
        console.log(this.one);
        console.log(this.h5);

        this.name = this.one.name;
        this.age = this.one.age;
        this.user = this.one.user;
        this.greet = this.one.greet;

        this.elem = this.h5.nativeElement;
        console.log(this.elem);
        this.elem.innerHTML = "Hello World";

    }
}
