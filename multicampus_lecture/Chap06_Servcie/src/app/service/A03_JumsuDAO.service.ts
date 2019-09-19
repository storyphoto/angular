// A02_JumsuDAO.service.ts

import { Injectable } from '@angular/core';
import { A03VO } from './A03_JumsuVO.service';
import { DecimalPipe } from '@angular/common';

@Injectable()
export class A03DAO {

    // service.module에 providers에 등록된 객체라 Angular가 알아서 주입해 준다
    constructor(private decimal: DecimalPipe){}

    public onTotal(vo: A03VO): void {
        vo.total = vo.kor + vo.eng;
    }

    public onAvg(vo: A03VO): void {
        let avg: string = this.decimal.transform(vo.total / 2, '1.0-2');
        vo.avg = Number(avg);
    }

    public display(vo: A03VO): string {
        return `${vo.name}님의 총점은 ${vo.total}이고 평균은 ${vo.avg}입니다.`
    }
}