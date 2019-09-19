// A01_Instance.service.ts

export class A01Instance {
    private check: boolean = false;

    public name: string = "HunBu";
    public age: number = 30;
    public data: any = {
        tel: '010-1234-5678',
        address: 'Busan'
    }
    public ary: Array<number> = [10, 11, 100];

    public toString(): string {
        return `[A01Instance] check=${this.check} name=${this.name}, age=${this.age}`
    }
}