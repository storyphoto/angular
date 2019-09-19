// A02_JumsuDAO.service.ts

import { Injectable } from '@angular/core';
import { A02VO } from './A02_JumsuVO.service';

@Injectable()
export class A02DAO {

    public onTotal(vo: A02VO): void {
        vo.total = vo.kor + vo.eng;
    }

    public onAvg(vo: A02VO): void {
        vo.avg = vo.total / 2;
    }

    public display(vo: A02VO): string {
        return `${vo.name}님의 총점은 ${vo.total}이고 평균은 ${vo.avg}입니다.`
    }
}