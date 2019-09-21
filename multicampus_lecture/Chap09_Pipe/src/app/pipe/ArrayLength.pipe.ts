// ArrayLength.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'arrayLength'})
export class ArrayLengthPipe implements PipeTransform {
    transform(data: Array<any>): Array<number> {
        if(!(data instanceof Array)) return data;

        // 반환할 배열을 선언한다
        let result: Array<number> = [];

        for(let i = 0; i <= data.length; i++){
            result.push(i);
        }

        return result;
    }
}