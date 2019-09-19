// A06_JumsuTwo

let name = "홍길동";

export const MY_PI = Math.PI;
export let num = 10;
export function getName(): string {
    return name;
}

// export가 달리면 module이 된다
export class JumsuTwo {
    private _name: string;
    private _kor: number;
    protected _eng: number;
    protected _total: number = 0;
    protected _avg: number;

    public constructor(name: string, kor: number, eng: number) {
        this._name = name;
        this._kor = kor;
        this._eng = eng;
        this._avg = 0;
    }

    public getName(): string {
        return this._name;
    }

    public get kor(): number {
        return this._kor;
    }

    public set kor(kor: number) {
        this._kor = kor;
    }


    public onTotal(): number {
        this._total = this._kor + this._eng;
        return this._total;
    }

    public onAvg(num: number): number {
        this._avg = this._total / num;
        return this._avg;
    }

    public display(): string {
        return `${this._name}님의 총점은 ${this._total}이고 평균은 ${this._avg}입니다`;
    }

}

