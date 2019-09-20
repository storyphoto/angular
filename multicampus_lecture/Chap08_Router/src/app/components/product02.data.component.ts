import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 128 page
@Component({
    selector: 'product-data',
    template: `
        <div class="card-body">    
            <h3>Product Data Component</h3>

            Num: {{num}}<br>
            Data: {{data?.name}} / {{data?.age}} / {{data?.check}}
        </div>
    `
})
export class ProductDataComponent{

    public num: string;
    public data: {check: boolean, name: string, age: number};

    constructor(public ac: ActivatedRoute){}

    ngOnInit(): void {
        this.ac.params.subscribe( (data: any) => this.num = data['num'] );

        this.ac.data.subscribe(
            (data: any) => {
                this.data = data[0];
            }
        )
    }
    
}