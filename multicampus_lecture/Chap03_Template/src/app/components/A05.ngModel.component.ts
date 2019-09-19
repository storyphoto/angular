import { Component }      from '@angular/core';

@Component({
    selector: 'a05Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>5. 양방향 바인딩</h3>
            </div>
            
            <!-- module에 formsModule이 import에 올라와야 한다 
                imports: [
                    BrowserModule, FormsModule
                ],
            -->
            <div class="card-body">
                Name: <input class="form-control" type="text" [(ngModel)]="name">
                Name: <input class="form-control" type="email" [(ngModel)]="name">
                Name: <input class="form-control" [value]="name" (input)="changeValue($event)">
                <br>

                List:
                <select class="form-control"  [(ngModel)]="name">
                    <!-- item => {name: 'HongGilDong', age: 20, address: 'Seoul'}, -->
                    <option *ngFor="let item of students" [value]="item.name">{{item.address}}</option>
                </select>

                <br>
                
                <!-- 종료태그가 없는 요소는 반복되지 않고 에러를 발생한다 -->
                <span *ngFor="let item of students">
                    <input type="radio" name="student" [value]="item.name" [(ngModel)]="name">{{item.name}}
                </span>
            </div>
        </div>
    `
})
export class A05Component{
    public name: string = 'HongGilDong';

    public students: Array< {name: string, age: number, address: string} > = [
        {name: 'HongGilDong', age: 20, address: 'Seoul'},
        {name: 'IlJimea', age: 25, address: 'Busan'},
        {name: 'ImGGekJung', age: 30, address: 'InChen'},
        {name: 'NolBu', age: 50, address: 'Seoul'},
        {name: 'HungBu', age: 40, address: 'Seoul'},
    ]


    public changeValue(evt: Event): void {
        // 이 방법보다는 as 연산자를 이용하자..
        let target: HTMLInputElement = <HTMLInputElement>evt.target;
        this.name = target.value;
    }
}