import { Component } from '@angular/core';
import { A01Injection } from '../service/A01_Injection.service';
import { A01Instance } from '../service/A01_Instance.service';

@Component({
    selector: 'a01Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>1. Custom Service</h3>
            </div>

            <div class="card-body">
                <h3>서비스를 직접 호출</h3>
                Name: {{service.name}}<br>
                Age: {{service.age}}<br>
                Data: {{service.data.tel}} / {{service.data.address}}<br>
                Ary: {{service.ary[0]}}<br>
                <!-- Check: {{service.check}}<br>     컴파일 에러 발생 안함 check -->
                Method: {{service.toString()}}
            </div>

            <div class="card-body">
                <h3>내부 변수 호출</h3>
                Name: {{name}}<br>
                Data: {{data.tel}} / {{data.address}}<br>
            </div>


            <div class="card-body">
                <h3>서비스를 직접 호출</h3>
                Name: {{normal.name}}<br>
                Age: {{normal.age}}<br>
                Data: {{normal.data.tel}} / {{normal.data.address}}<br>
                Ary: {{normal.ary[0]}}<br>
                <!-- Check: {{normal.check}}<br>     컴파일 에러 발생 안함 check -->
                Method: {{normal.toString()}}
            </div>

        </div>
    `,
    // 사용자 정의 서비스를 객체화 할 목적으로 기술한다
    // providers는 2군데에서 정의 가능.
    // 1. Component의 providers => 해당 컴퍼넌트에서만 정의한 서비스를 이용
    // 2. Module의 providers => Module에 정의된 모든 컴퍼넌트에서 사용 가능
    // providers의 []에 클래스 이름만 기술하면 각 컴퍼넌트마다 객체가 생성된다(싱글턴 아님)
    providers: [
        A01Injection            // 1. 해당 클래스의 객체를 생성
    ]
})
export class A01Component{
    /*
    private service: A01Injection;
    constructor(){
        this.service = new A01Injection();
        console.log(this.service);
    }
    */

    public name: string;
    public data: {tel: string, address: string};
    public check: boolean;

    // Injectable이 없는 Normal Class를 서비스 형태로 이용
    // 클래스를 이용할 인스턴스를 먼저 선언
    public normal: A01Instance;


    // 생성자 메서드에서 접근제한자가 붙은 매개변수는 동일한 접근 제한자로
    // 동일한 이름의 멤버변수를 생성해 주고 넘어온 값도 대입해 준다.
    // 서비스는 providers에 선언된 클래스 중 타입이 동일한 클래스를 주입해 준다
    constructor(public service: A01Injection){
        console.log(this.service);

        // 클래스를 초기화
        this.normal = new A01Instance();
    }

    ngOnInit(): void {
        this.name = this.service.name;
        this.data = this.service.data;
        // this.check = this.service.check;    // private이라 에러 발생
    }


}
