// UpLower.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
    {name: 'upLow'}
)
export class UpLowerPipe implements PipeTransform {
    // {{ 12345.678 | currency : 'KRW' : '1.1-2' }}
    // 1. 12345.678 => transform 메서드의 첫번째 매개변수로 전달된다
    // 2. currency => pipe의 name을 의미.
    //      앵귤러는 해당 pipe의 transform을 호출하고 그 결과값을 view에 반영한다
    // 3. KRW => transform의 두번째 매개변수에 할당된다
    // 4. 1.1-2 => transform의 세번째 매개변수에 할당된다
    transform(data: string, key: string): string {
        // 사용자의 잘못된 사용을 막는 guard가 필요하다
        if(typeof data !== 'string' || typeof key !== 'string') return data;
        if(key === undefined) return data;

        if(key === 'up') {
            return data.toUpperCase();
        }else if(key === 'lower'){
            return data.toLowerCase();
        }
        return data;
    }
}