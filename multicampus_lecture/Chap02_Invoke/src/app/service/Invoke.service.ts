import { Injectable } from '@angular/core';

@Injectable()
export class InvokeService {
    public currencies: Array<string> = ["USD", "EUR", "CNY", "KRW"];
    public rate: { [key:string]: number } = {
        "USD": 1,
        "EUR": 1.35,
        "CNY": 7.23,
        "KRW": 0.0089
    }
    public convertRate(amount: number, inCurr: string, outCurr: string): number {
        return amount * this.rate[inCurr] / this.rate[outCurr];
    }
}