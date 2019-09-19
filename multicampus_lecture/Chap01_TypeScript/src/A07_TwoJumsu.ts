import { AJumsu } from "./A07_AJumsu";

// A07_TwoJumsu.ts

export class TwoJumsu extends AJumsu {

    public constructor(name: string, kor: number, eng: number) {
        super(name, kor, eng)
    }

    public onTotal(): number {
        // AJumsu의 getter kor를 참조
        this._total = this.kor + this._eng;
        return this._total;
    }

    public onAvg(num: number): number {
        this._avg = this._total / num;
        return this._avg;
    }

    public display(): string {
        // AJumsu의 getName() 메서드를 참조
        return `${this.getName()}님의 총점은 ${this._total}이고 평균은 ${this._avg}입니다`;
    }

}

