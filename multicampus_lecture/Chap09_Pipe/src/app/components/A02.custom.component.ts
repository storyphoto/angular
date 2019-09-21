import { Component } from '@angular/core';

@Component({
    selector: 'a02Component',
    template: `
        <div class="card-body">
            <div class="card-heading">   
                <h3>2. Custom Pipe</h3>
            </div>

            <div class="card-body">
		        <h4>Abbr</h4>
                <div>
                    1. {{'abcd' | uppercase }}<br>
                    2. {{ 'AbCdE' | lowercase }}<br>
                    <!-- 
                        내가 만든 커스텀 파이프도 view에 참여하므로 
                        해당 모듈의 declarations에 등록해야 한다
                    -->
                    3. {{ 'AbCdE' | upLow }}<br>
                    4. {{ 'AbCdE' | upLow : 'up'}}<br>
                    5. {{ 'AbCdE' | upLow : 'lower'}}<br>
                    6. {{ 12345 | upLow : 'lower'}}<br>
                    <br>
                    7. {{str | abbr }}<br>
                    8. {{str | abbr : 10 }}<br>
                    9. {{str | abbr : 10 : '***'}}<br>
                </div>
                <br>


                <h4>LimitTo</h4>
                <div class="form-group">
                    <label for="num">Number: {{num}}</label>
                    <select class="form-control" name="num" [(ngModel)]="num">
                        <option *ngFor="let item of obj | arrayLength">{{item}}</option>
                    </select>
                    <br>

                    <table class="table">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>KOR</th>
                            <th>ENG</th>
                        </tr>
                        <tr *ngFor="let item of obj | limitTo : num">
                            <td>{{item.id}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.kor}}</td>
                            <td>{{item.eng}}</td>
                        </tr>
                    </table>
                </div>
                <br>

            </div>
        </div>
    `
})
export class A02Component{
    public str: string = '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세';

    public obj: Array<any> = [
        {id: 1, name: 'Hong', kor: 90, eng: 71},
        {id: 2, name: 'Jimea', kor: 80, eng: 72},
        {id: 3, name: 'NolBu', kor: 70, eng: 73},
        {id: 4, name: 'HungBu', kor: 60, eng: 74},
        {id: 5, name: 'Ih', kor: 50, eng: 85}
    ]

    public num: number = this.obj.length;

}
