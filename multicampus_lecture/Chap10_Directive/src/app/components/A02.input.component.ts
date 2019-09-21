import { Component, Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
    selector: '[a02OneDir]',
    host: {
        '(click)': 'onClick()'
    }
})
export class A02OneDirective {
    // [] 속성 변수 값을 받을 준비
    @Input('a02OneDir') dirName: string;
    @Input() age: number = 0;

    public onClick(): void {
        console.log("A02 One Directive Clicked =>" + this.dirName + ":" + this.age);
    }
}


@Component({
    selector: 'a02Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>2. Directive Input</h3>
            </div>

            <div class="card-body">
                <div a02OneDir='NolBu'>ONE Dir</div>

                <!-- 
                    모든 속성의 값을 지시자가 받는다 
                    전달한 속성에 관련된 값을 모두 지시자에서 준비 해 놔야 한다 
                -->
                <div [a02OneDir]="name" [age]="age">ONE Dir</div>
            </div>
            
        </div>
    `
})
export class A02Component {
    public name: string = 'HongGilDong';
    public age: number = 20;
    public info: {address: string, tel: string} = {
        address: 'Seoul',
        tel: '010-1111-2222'
    }
}