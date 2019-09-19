// A02_JumsuVO.service.ts

import { Injectable } from '@angular/core';

@Injectable()
export class A02VO {
    private _name: string;
    public kor: number;
    public eng: number;
    public total: number;
    public avg: number;

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