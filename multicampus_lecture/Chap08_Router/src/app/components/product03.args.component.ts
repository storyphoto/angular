import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 128 page
@Component({
    selector: 'product-args',
    template: `
        <div class="card-body">
            <h3>Product Argument Component</h3>
            <div>
                Check: {{check}}<br>
                Name: {{name}}<br>
                Age: {{age}}
            </div>
        </div>
    `
})
export class ProductArgsComponent{
    public check: boolean;
    public name: string;
    public age: number;

    constructor(public ac: ActivatedRoute){}

    ngOnInit(): void {
        this.ac.queryParams.subscribe(
            (data: any) => {
                this.check = data['check'];
                this.name = data['name'];
                this.age = data['age'];
            }
        )
    }
}


