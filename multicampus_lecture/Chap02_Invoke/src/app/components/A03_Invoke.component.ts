import { Component } from "@angular/core";
import { InvokeService } from '../service/Invoke.service';

@Component({
    selector: 'a03Invoke',
    template: `
        <div class="card-body">
            <h3>A03 Invoke</h3>
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
    
    `],
    providers: [ InvokeService ]
})
export class A03Invoke {
    // controller
    // view(template)에서 사용되는 변수는 반드시 controller에 정의되어 있어야 함
    public cost: number = 5;
    public qty: number = 3;
    public inCurr: string = "USD";
    public currencies: Array<string> = this.invoke.currencies;
    public rate: { [key:string]: number } = this.invoke.rate;

    //public invoke: InvokeService;
    // 생성자 메서드
    constructor(private invoke: InvokeService){
        //this.invoke = invoke;
    }

    public onTotal(outCurr: string): number {
        // return this.cost * this.qty * this.rate[this.inCurr] / this.rate[outCurr];
        return this.invoke.convertRate(this.cost * this.qty, this.inCurr, outCurr);
    }

}