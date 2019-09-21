// LimitTo.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'limitTo'})
export class LimitToPipe implements PipeTransform {
    transform(data: Array<any>, size:number = data.length): Array<any> {
        if(!(data instanceof Array)) return data;
        if(typeof size === 'string') {
            size = Number(size);
        }

        // 반환할 배열을 선언한다
        let result: Array<any> = [];

        // for문을 돌면서 해당되는 요소만 result에 push로 담는다
        for(let i = 0; i < data.length; i++){
            if(i < size){
                result.push(data[i]);
            }else{
                break;
            }
        }

        return result;

    }
}