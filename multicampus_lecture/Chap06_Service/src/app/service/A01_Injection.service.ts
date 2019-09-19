// A01_Injection.service.ts

class A01Injection {
    public name: string = "NolBu";
    public age: number = 20;
    public data: any = {
        tel: '010-1234-5678',
        address: 'Seoul'
    }
    public ary: Array<number> = [10, 11, 100];

    public toString(): string {
        return `[A01Injection] name=${this.name}, age=${this.age}`
    }
}