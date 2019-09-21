// Abbr.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'abbr'})
export class AbbrPipe implements PipeTransform {
    transform(data: string, size: number = 20, symbol: string = "..."): string {
        if(typeof data !== 'string' || typeof symbol !== 'string') return data;
        if(typeof size !== 'number') return data;

        return data.substr(0, (size - symbol.length)) + symbol;

    }
}