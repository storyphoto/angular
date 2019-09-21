import { Component, Input, ElementRef, Renderer, HostListener } from '@angular/core';

import { Directive } from '@angular/core';

@Directive({
    selector: '[a03OneDir]'
})
export class A03OneDirective {
    @Input('a03OneDir') color: string;

    public elem: HTMLElement;

    // 내부 객체를 생성할 요소를 주입받는다
    constructor(private el: ElementRef, private render: Renderer) {
        console.log(this.el);
        console.log(this.render);

        this.elem = this.el.nativeElement;
    }

    // host를 다음과 같이 빼서 기술할 수 있다
    @HostListener('mouseenter') onEnter(): void {
        this.render.setElementStyle(this.elem, "color", this.color)
    }

    @HostListener('mouseleave') onLeave(): void {
        this.render.setElementStyle(this.elem, "color", "")
    }
}


@Component({
    selector: 'a03Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>3. Directive HostListener</h3>
            </div>

            <div class="card-body">
                <div a03OneDir="orange">Directive Attribute</div>
                <p [a03OneDir]="color">Native Attribute</p>
            </div>
        </div>
    `
})
export class A03Component {
    public color: string = "green"
}
