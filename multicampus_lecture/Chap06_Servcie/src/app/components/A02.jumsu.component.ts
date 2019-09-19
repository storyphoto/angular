import { Component } from '@angular/core';
import { A02DAO } from '../service/A02_JumsuDAO.service';
import { A02VO } from '../service/A02_JumsuVO.service';

@Component({
    selector: 'a02Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>2. Custom Service - 생성자 없음</h3>
            </div>

            <div class="card-body">
                Hong: {{hong}}<br>
                Nolbu: {{nolbu}}
            </div>
        </div>
    `,
    providers: [
        {provide: A02VO,    useClass: A02VO},       // Default. 객체마다 인스턴스 생성
        {provide: A02DAO,   useValue: new A02DAO}   // 싱클턴
    ]
})
export class A02Component{

    public hong: string;
    public nolbu: string;

    constructor(private vo: A02VO, private dao: A02DAO){}

    ngOnInit(): void {
        this.vo.name = "홍길동";
        this.vo.kor = 100;
        this.vo.eng = 80;

        this.dao.onTotal(this.vo);
        this.dao.onAvg(this.vo);
        this.hong = this.dao.display(this.vo);


        this.vo.name = "놀부";
        this.vo.kor = 90;
        this.vo.eng = 80;

        this.dao.onTotal(this.vo);
        this.dao.onAvg(this.vo);
        this.nolbu = this.dao.display(this.vo);
    }
}