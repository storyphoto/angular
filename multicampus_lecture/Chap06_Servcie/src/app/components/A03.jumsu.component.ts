import { Component } from '@angular/core';
import { A03VO } from '../service/A03_JumsuVO.service';
import { A03DAO } from '../service/A03_JumsuDAO.service';

@Component({
    selector: 'a03Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>3. Custom Service - 생성자 있음</h3>
            </div>

            <div class="card-body">
                <div *ngFor="let item of result">{{item}}<div>
            </div>
        </div>
    `,
    providers: [ A03DAO ]
})
export class A03Component{

    public studtents: Array<A03VO> = [];
    public result: Array<string> = [];

    constructor(private dao: A03DAO){}

    ngOnInit(): void {
        this.studtents.push(new A03VO("홍길동", 100, 75));
        this.studtents.push(new A03VO("놀부", 90, 75));

        for(let item of this.studtents) {
            this.dao.onTotal(item);
            this.dao.onAvg(item);
            this.result.push(this.dao.display(item));
        }
    }

}