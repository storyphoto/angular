import { Component } from '@angular/core';
import { ProfitService } from '../service/A06.profit.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'a06Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>
                    6. HTTP Service
                    <span class="label label-primary">profit</span>
                </h3>
            </div>

            <div class="card-body form-inline">
                <div class="form-group">
                    <select class="form-control" [formControl]="year">
                        <option value="All">All</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                    </select>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" (click)="getProfit()">Change</button>
                </div>
            </div>
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Month</th>
                            <th>Profit</th>
                            <th>Expenses</th>
                            <th>Amount</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let item of profitList">
                            <td>{{item.year}}</td>
                            <td>{{item.month}}</td>
                            <td>{{item.profit}}</td>
                            <td>{{item.expenses}}</td>
                            <td>{{item.amount}}</td>
                            <td>
                                <a (click)="sendItem(item)">{{item.comment}}</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            
            </div>

            <div class="card-body">
                <textarea class="form-control">{{item?.comment}}</textarea>
            </div>
        </div>
    `,
    providers: [ ProfitService ]
})
export class A06Component  { 

    public year: FormControl = new FormControl('All');

    // View 연결할 변수
    public profitList: string[];

    // 한 줄에 대한 정보만 가지고 있는 변수
    public item: any;
    
    constructor(private service: ProfitService) {}

    // 한 줄 정보만 받아 변수에 대입할 함수
    public sendItem(item: any): void {
        this.item = item;
    }


    public getProfit(): void {
        this.service.getData(this.year.value)
        .subscribe(
            (data: string[]) => {
                console.log(data);
                this.profitList = data;
            },
            (error: string) => {
                console.log(error);
            }
        )
    }
}