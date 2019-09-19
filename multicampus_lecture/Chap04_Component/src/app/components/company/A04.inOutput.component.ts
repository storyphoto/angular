import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ObjType } from './A03.output.component';

@Component({
    selector: 'a04OneComponent',
    template: `
    <div class="card-body">
        <h4>A04 One Component</h4>

    </div>
    `
})
export class A04OneComponent {
    // EventEmitter => 사용자 정의 이벤트를 생성한다
    @Output() sendNameEvent: EventEmitter<string> = new EventEmitter();
    @Output() sendObjEvent: EventEmitter<ObjType> = new EventEmitter();

    // constructor가 실행된 후 초기 작업등을 위해 실행되는 메서드
    ngOnInit(): void {
        this.sendName();
        this.sendObject();
    }

    // 생성된 이벤트를 적절히 발생시킨다.
    public sendName(): void {
        this.sendNameEvent.emit(this.name);
    }

    public sendObject(): void {
        let data: ObjType = {
            name: this.name,
            obj: this.obj,
            ary: this.ary,
            age: this.age
        }
        this.sendObjEvent.emit(data);
    }
    
    public name: string = 'HongGilDong';
    public obj: any = {
        tel: '010-1234-5678',
        address: 'Seoul'
    }
    public ary: string[] = ['One','Two','Three'];
    public age: number = 20;
    public company: string = 'Multi';

}

@Component({
    selector: 'a04TwoComponent',
    template: `
        <div class="card-body">
            <h4>A04 Two Component</h4>

            <div class="card-body">
                Name: {{name}}<br>
                Obj: {{data?.name}} / {{data?.obj.tel}} / {{data?.obj.address}}<br>
                Ary: {{data?.ary[0]}} / {{data?.ary[1]}}<br>
                Age: {{data?.age + 100}}
            </div>
        </div>
    `
})
export class A04TwoComponent {
    @Input() name: string;
    @Input() data: ObjType;

}

@Component({
    selector: 'a04Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>4. 형제 Component간 Data 전달</h3>
            </div>

            <div class="card-body">
                <!-- one이 전달한 데이터를 이벤트를 이용하여 받는 처리 -->
                <a04OneComponent (sendNameEvent)="getName($event)" 
                    (sendObjEvent)="getObject($event)"></a04OneComponent>

                <!-- 받은 데이터를 name, data 변수에 대입한 후 그 값을 다시 
                    하위 컴퍼넌트에 전달 -->
                <a04TwoComponent [name]="name" [data]="data"></a04TwoComponent>
            </div>
        </div>
    `
})
export class A04Component {
    public name: string;
    public data: ObjType;

    public getName(evt: string): void {
        console.log(evt);
        this.name = evt;
    }

    public getObject(evt: ObjType): void {
        console.log(evt);
        this.data = evt;
    }
}
