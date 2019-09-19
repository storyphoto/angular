// A07_ThreeJumsu.ts

import { AJumsu } from "./A07_AJumsu";

export class ThreeJumsu extends AJumsu{
    private _math: number;

    public constructor(name: string, kor: number, eng: number, math: number) {
        super(name, kor, eng);
        this._math = math;
    }

    // override
    public onTotal(): number {
        this._total = this.kor + this._eng + this._math;
        return this._total;
    }
}

