import { Component, Input } from '@angular/core';

@Component({
    selector: 'a02OneComponent',
    template: `
        <div class="panel-body">
            <div class="card-body">
                <h4>하위 컴퍼넌트</h4>
                Normal: {{normal}}<br>
                Name: {{name}}<br>
                Object: {{obj?.tel}}<br>
                Array: {{ary[0]}}<br>

                Age: {{age + 100}}<br>
                Company: {{comp}}<br>
            </div>
        </div>
    `
})
export class A02OneComponent {
    // Import가 되어야 한다.
    //  @Input(속성명) 변수명: 타입
    @Input('normal') normal: string;
    @Input() name: string;                  // 속성명과 변수명이 같으면 속성명은 생략가능

    // 미리 받을 변수를 준비해 놓아도 에러는 아님(단지 변수 선언으로 취급됨)
    @Input() obj: {tel: string, address: string};
    @Input() ary: Array<string> = [];   

    // 속성명과 변수명이 다른 경우는 속성명을 생략할 수 없다.
    @Input("company") comp: string;     

    // @Input() age: number; 
    private _age: number;

    @Input()
    public set age(age: number) {
        console.log(typeof age);
        if(typeof age === 'string'){
            this._age = Number(age);
        }else{
            this._age = age;
        }
    }

    public get age(): number {
        return this._age;
    }
}

@Component({
    selector: 'a02Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>2. 하위 Component에 Data 전달</h3>
            </div>
            <div class="card-body">
                <div>
                    <label>Name</label>
                    <input type="text" class="form-control" [(ngModel)]="name">
                </div>
                <div>
                    <label>Obj</label>
                    <input type="text" class="form-control" [(ngModel)]="obj.tel">
                </div>
                <div>
                    <label>Ary</label>
                    <input type="text" class="form-control" [(ngModel)]="ary[0]">
                </div>
                <div>
                    <label>Age</label>
                    <!-- 숫자만 입력 가능한 필드가 된다 -->
                    <input type="number" class="form-control" [(ngModel)]="age">
                </div>
                <div>
                    <label>Company</label>
                    <input type="text" class="form-control" [(ngModel)]="company">
                </div>
            </div>

            <!-- 데이터 전달은 속성 바인딩 방식으로 전달
                일반 속성 => 해당 컴퍼넌트에서 안 받아도 에러 아님
                속성 바인딩 => 해당 컴퍼넌트에서 안 받아도 에러 (@Input()으로 반드시 받아야 함)
            -->
            <a02OneComponent normal="A02 Child" [name]="name"
                [obj]="obj" [ary]="ary" [company]="company"
                [age]="age"></a02OneComponent>
        </div>
    `
})
export class A02Component {
    public name: string = 'HongGilDong';
    public obj: {tel: string, address: string} = {
        tel: '010-1234-5678',
        address: 'Seoul'
    }
    public ary: string[] = ['One','Two','Three'];
    public age: number = 20;
    public company: string = 'Multi';

}
