// A01.One.directive.ts

import { Directive, Input } from '@angular/core';

@Directive({
    selector: 'a01OneDir',      // <div a01OneDir> 형태의 속성명이 된다
    host: {
        '(click)': 'onClick()'
    }
})
export class A01OneDirective {

    public onClick(): void {
        console.log("A01 One Directive Clicked");
    }
}


@Directive({
    // Angular의 속성으로 등록된다
    // 사용하는 곳에서 <tagName [a01OneDir]=value>XXX</tagName>
    // [] = 변수명 형태로 데이터 전달 목적으로 사용
    selector: '[a01TwoDir]',
    host: {
        '(click)': 'onClick()'
    }
})
export class A01TwoDirective {
    // [] 속성 변수 값을 받을 준비
    @Input('a01TwoDir') dirName: string;

    public onClick(): void {
        console.log("A01 Two Directive Clicked");
    }
}