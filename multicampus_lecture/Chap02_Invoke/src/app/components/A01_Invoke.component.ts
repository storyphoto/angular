import { Component } from "@angular/core";

@Component({
    selector: 'a01Invoke',
    template: `
        <div class="card-body">
            <h1>Invoke</h1>
        </div>

        <div class="card-body">
            <a02Invoke></a02Invoke>
        </div>


        <div class="card-body">
            <h3>A01 Invoke</h3>
            Cost: <input type="text" class="form-control" [(ngModel)]="cost"><br>
            Qty: <input type="text" class="form-control" [(ngModel)]="qty"><br>
            <br>
            Total: <span>{{cost * qty}} / {{onTotal()}}</span>
        </div>

        
    `,
    styles: [`
    
    `]
})
export class A01Invoke {
    // controller
    // view(template)에서 사용되는 변수는 반드시 controller에 정의되어 있어야 함
    public cost: number = 5;
    public qty: number = 3;

    public onTotal(): number {
        return this.cost * this.qty;
    }

}