import { Component, HostListener, Renderer } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[a04OneDir]'
})
export class A04OneDirective {
    private elem: HTMLElement;
    private inputElem: HTMLInputElement;

    constructor(private el: ElementRef, private render: Renderer) {
        this.elem = el.nativeElement;
    }

    @HostListener('click') onclick(): void {

        // 일단 적용이 되는지 체크하기 위해 현재 엘러먼트 색상을 변경
        this.render.setElementStyle(this.elem, 'color', 'orange');

        if (!this.inputElem) {

            // 개행 태그 생성
            this.render.createElement(this.elem, 'br');

            // Input 객체 생성 및 속성 지정
            this.inputElem = this.render.createElement(this.elem, 'input');
            this.render.setElementAttribute(this.inputElem, 'id', 'hello');
            this.render.setElementAttribute(this.inputElem, 'value', 'Hello~');

            // Class 속성 지정
            this.render.setElementClass(this.inputElem, 'form-control', true);

            this.render.createElement(this.elem, 'br');

            // 버튼 생성
            let btn: HTMLButtonElement = this.render.createElement(this.elem, 'button');
            this.render.setElementAttribute(btn, 'id', 'btn');
            this.render.createText(btn, 'ADD');

            // this.render.setElementClass(btn, 'btn btn-danger', true);   // 두 속성을 한번에는 안됨.
            this.render.setElementClass(btn, 'btn', true);
            this.render.setElementClass(btn, 'btn-primary', true);

            this.render.setElementStyle(btn, 'color', 'black');

            // Event 할당
            this.render.listen(btn, 'click', () => {
                this.render.setElementStyle(btn, 'color', 'white');
                this.inputElem.value = 'HongGilDong';
            });

            // 외부 요소를 참조해서 이벤트를 동적으로 할당한다.
            // 가저오는 대상의 Element Type을 호출 시점에서 알 수 없으므로 부모타입으로 받는다.
            let outBtn: HTMLElement = document.getElementById('outBtn');
            this.render.listen(outBtn, 'click', () => {
                this.render.setElementStyle(outBtn, 'color', 'white');
                this.inputElem.value = 'NolBu';
            });
        }
    }
}

@Component({
    selector: 'a04Component',
    template: `
        <div class="card-body">

            <div class="card-heading">
                <h3>4. 요소 생성 및 속성 지정</h3>
            </div>

            <div class="card-body">
               <div a04OneDir>Inner Content. <b>Click here</b></div>
               <br>
               <button id="outBtn">OUTER BTN</button>
            </div>
        </div>
    `
})
export class A04Component {

}
