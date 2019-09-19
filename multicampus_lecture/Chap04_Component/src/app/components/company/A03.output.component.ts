import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'a03OneComponent',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>하위 컴퍼넌트</h3>
            </div>
            <div class="card-body">
                Name: <br>
                <button class="btn btn-primary btn-sm" (click)="sendName()">Send Name</button> &nbsp; 
                <button class="btn btn-danger btn-sm" (click)="sendObject()">Send Object</button>
            </div>
            
        </div>
    `
})
export class A03OneComponent {
    public name: string = 'HongGilDong';
    public obj: any = {
        tel: '010-1234-5678',
        address: 'Seoul'
    }
    public ary: string[] = ['One','Two','Three'];
    public age: number = 20;
    public company: string = 'Multi';


    // EventEmitter => 사용자 정의 이벤트를 생성한다
    @Output() sendNameEvent: EventEmitter<string> = new EventEmitter();
    @Output() sendObjEvent: EventEmitter<ObjType> = new EventEmitter();

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


    

}

export interface ObjType {
    name: string;
    obj: {tel: string, address: string};
    ary: Array<string>;
    age: number;
}


@Component({
    selector: 'a03Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>3. 상위 Component에 Data 전달</h3>
            </div>
            
            <div class="card-body">
                Name: {{name}}<br>
                Obj: {{data?.name}} / {{data?.obj.tel}} / {{data?.obj.address}}<br>
                Ary: {{data?.ary[0]}} / {{data?.ary[1]}}<br>
                Age: {{data?.age + 100}}
            </div>

            <!-- Angular의 Event 객체는 $event 형태로 사용 -->
            <a03OneComponent (sendNameEvent)="getName($event)" 
                            (sendObjEvent)="getObject($event)"></a03OneComponent>
        </div>
    `
})
export class A03Component {
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
