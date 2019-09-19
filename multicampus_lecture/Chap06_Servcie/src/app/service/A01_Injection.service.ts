import { Injectable } from '@angular/core';

// A01_Injection.service.ts

@Injectable()       // providers에서 참조 가능한 클래스가 된다
export class A01Injection {
    private check: boolean = true;

    public name: string = "NolBu";
    public age: number = 20;
    public data: any = {
        tel: '010-1234-5678',
        address: 'Seoul'
    }
    public ary: Array<number> = [10, 11, 100];

    public toString(): string {
        return `[A01Injection] check=${this.check} name=${this.name}, age=${this.age}`
    }
}