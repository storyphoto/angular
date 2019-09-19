// A06_JumsuThree.ts

import { JumsuTwo } from "./A06_JumsuTwo";

export class JumsuThree extends JumsuTwo{
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

