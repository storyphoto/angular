import { Component } from "@angular/core";

@Component({
    selector: 'a02Invoke',
    template: `
        <div class="card-body">
            <h3>A02 Invoke</h3>
        </div>
        <div class="card-body">
            Cost: <input type="text" class="form-control" [(ngModel)]="cost"><br>
            Qty: <input type="text" class="form-control" [(ngModel)]="qty"><br>
            Country: <br>
            <select class="form-control" [(ngModel)]="inCurr">
                <option *ngFor="let item of currencies">{{item}}</option>
            </select>
            <br>
            Total: <span *ngFor="let item of currencies">{{onTotal(item) | currency : item : 'code' : '1.3' }} &nbsp; </span>
        </div>
    `,
    styles: [`
    
    `]
})
export class A02Invoke {
    // controller
    // view(template)에서 사용되는 변수는 반드시 controller에 정의되어 있어야 함
    public cost: number = 5;
    public qty: number = 3;
    public inCurr: string = "USD";
    public currencies: Array<string> = ["USD", "EUR", "CNY"];
    public rate: { [key:string]: number } = {
        "USD": 1,
        "EUR": 1.35,
        "CNY": 7.23
    }

    public onTotal(outCurr: string): number {
        return this.cost * this.qty * this.rate[this.inCurr] / this.rate[outCurr];
    }

}