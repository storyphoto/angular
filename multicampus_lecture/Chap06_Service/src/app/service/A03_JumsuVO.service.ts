// A02_JumsuVO.service.ts

export class A03VO {
    private _name: string;
    public kor: number;
    public eng: number;
    public total: number;
    public avg: number;

    constructor(name: string, kor: number, eng: number) {
        this._name = name;
        this.kor = kor;
        this.eng = eng;
    }

    // Getter, Setter
    public set name(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }

    public toString(): string {
        return `[A02VO] name=${this._name}, kor=${this.kor}`
    }
}