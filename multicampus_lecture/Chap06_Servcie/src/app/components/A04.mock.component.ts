import { Component } from '@angular/core';
import { MockService } from '../service/A04_mock.service';
import { DecimalPipe } from '@angular/common';


@Component({
    selector: 'a04Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>4. Mock Service</h3>
            </div>

            <div class="card-body">
                <div *ngFor="let item of result">{{item}}</div>
            </div>

        </div>
    `,
    providers: [ MockService ]
})
export class A04Component{
    public result: Array<string>;

    constructor(private mock: MockService) {}

    ngOnInit(): void {
        this.result = this.mock.getData();
    }
}