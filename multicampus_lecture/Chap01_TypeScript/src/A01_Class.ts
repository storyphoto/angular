// A01_Class.ts
class Jumsu {
    private _name:string;
    private _kor:number;
    private _eng:number;
    private _total: number = 0;
    private _avg: number;

    public constructor(name: string, kor: number, eng: number){
        this._name = name;
        this._kor = kor;
        this._eng = eng;
        this._avg = 0;
    }

    public onTotal(): number {
        this._total = this._kor + this._eng;
        return this._total;
    }

    private onAvg(num: number): number {
        this._avg = this._total / num;
        return this._avg;
    }

    public display(): string {
        this.onAvg(2);
        return `${this._name}님의 총점은 ${this._total}이고 평균은 ${this._avg}입니다`;
    }

}

let nolbu: Jumsu = new Jumsu("Nolbu", 60, 82);
nolbu.onTotal();
let view = nolbu.display();
console.log(view);

let result: HTMLDivElement = document.getElementById("result") as HTMLDivElement;
result.innerHTML = view;


