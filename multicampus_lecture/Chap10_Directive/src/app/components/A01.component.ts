import { Component } from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>1. Directive</h3>
            </div>

            <div class="card-body">
                <!-- 지시자도 속성에 의해 view에 참여하므로 module에 올려야 한다 -->
                <a01OneDir>ONE Dir</a01OneDir>
                <div a01OneDir>ONE Dir</div>    <!-- 작동 안함. 에러는 아님. 지시자 이름을 []로 정의 안함 -->
            </div>

            <div class="card-body">
                <!-- []을 붙이면 태그로는 사용 불가 -->

                <!-- [] 붙은 속성은 반드시 해당 컴퍼넌트에서 @Input()로 변수명을 받아야 한다 
                    [] 없으면 해당 컴퍼넌트에서 안 받아도, 받아도 에러는 아니다
                -->
                <div a01TwoDir>TWO Dir</div>    <!-- 기능만 이용할 경우 -->
                <div [a01TwoDir]>TWO Dir</div>
            </div>
        </div>
    `
})
export class A01Component {

}


