import { IJumsu } from "./A07_IJumsu";

// A07_AJumsu.ts

export abstract class AJumsu implements IJumsu {
    public iname: string = "JumsuTwo";

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

    // interface의 정의 안한 메서드는 껍데기 메서드라도 정의를 꼭 해 놔야 에러 아님
    abstract onTotal(): number;


    public onAvg(num: number): number {
        this._avg = this._total / num;
        return this._avg;
    }

    public display(): string {
        return `${this._name}님의 총점은 ${this._total}이고 평균은 ${this._avg}입니다`;
    }

}

