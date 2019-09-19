import { Component } from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>1. Custom Service</h3>
            </div>

            <div class="card-body">
                
            </div>
        </div>
    `,
    // 사용자 정의 서비스를 객체화 할 목적으로 기술한다
    // providers는 2군데에서 정의 가능.
    // 1. Component의 providers => 해당 컴퍼넌트에서만 정의한 서비스를 이용
    // 2. Module의 providers => Module에 정의된 모든 컴퍼넌트에서 사용 가능
    // providers의 []에 클래스 이름만 기술하면 각 컴퍼넌트마다 객체가 생성된다(싱글턴 아님)
    providers: []
})
export class A01Component{
    
}
