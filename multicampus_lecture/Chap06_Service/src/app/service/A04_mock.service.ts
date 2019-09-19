// A04_mock.service.ts

import { Injectable } from '@angular/core';
import { JumsuType } from '../types/Jumsu.type';
import { A03VO } from './A03_JumsuVO.service';
import { A03DAO } from './A03_JumsuDAO.service';
import { DecimalPipe } from '@angular/common';

@Injectable()
export class MockService {

    // HTTP Service로 데이터 가져오기
    // 가상데이터를 객체 형태로 정의
    private data: Array<JumsuType> = [
        {name: "홍길동", kor: 95, eng: 63},
        {name: "놀부", kor: 75, eng: 97},
        {name: "흥부", kor: 65, eng: 83.333},
    ];

    private students: Array<A03VO> = [];
    private result: Array<string> = [];

    // 서비스에서 정의된 사용자 정의 또는 임베드 서비스를 사용하려면 선언은
    // 해당 모듈에서 선언하고 여기서 주입받아 사용한다

    // 주입받을 서비스를 service.module.ts의 providers에 정의
    constructor(private dao: A03DAO){
        // service는 ngOnInit 메서드가 없다. -> 컴퍼넌트만 존재
        for(let item of this.data) {
            let vo: A03VO = new A03VO(item.name, item.kor, item.eng);
            this.students.push(vo);
        }
    }

    public getData(): Array<string> {
        for(let item of this.students) {
            this.dao.onTotal(item);
            this.dao.onAvg(item);
            this.result.push( this.dao.display(item) );

        }

        return this.result;
    }

}