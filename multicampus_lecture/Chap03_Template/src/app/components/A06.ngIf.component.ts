import { Component } from '@angular/core';

@Component({
    selector: 'a06Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>6. ngIf / ngSwitch / ngFor</h3>
            </div>

            <div class="card-body">
                <h4>ngIf</h4>
                <select [(ngModel)]="gender">
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
                <div>
                    <!-- *이 있는 지시자는 속성 바인딩처럼 변수명을 참조한다.
                        *이 있는 지시자는 DOM이 변경이 있음. 꼭 확인
                        *ngIf는 true면 DOM을 새로 생성
                        *ngIf는 true면 DOM을 삭제
                    -->
                    <span *ngIf=" gender === 'male' ">Male</span>
                    <span *ngIf=" gender === 'female' ">Female</span>
                </div>
                <div>
                    <span [hidden]=" gender !== 'male' ">Male</span>
                    <span [hidden]=" gender !== 'female' ">Female</span>
                </div>
            </div>

            <div class="card-body">
                <h4>ngSwitch</h4>
                <button (click)="grade = 'admin'">Admin</button>
                <button (click)="grade = 'member'">Member</button>
                <button (click)="grade = 'guest'">Guest</button>
                <button (click)="grade = 'nothing'">Nothing</button>
                <br>
    
                <div [ngSwitch]="grade">
                    <!-- grade === 'admin' -->
                    <span *ngSwitchCase=" 'admin' ">Admin</span>  
                    <span *ngSwitchCase=" 'member' ">Member</span>
                    <span *ngSwitchCase=" 'guest' ">Guest</span>
                    <span *ngSwitchDefault>회원등급을 선택해 주세요.</span>
                </div>
            </div>

            <div class="card-body">
                <h4>ngFor</h4>
                <table class="table">
                    <tr>
                        <td>No</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>KOR</td>
                        <td>ENG</td>
                    </tr>

                    <!--
                        for(let item of students) {
                            // item => {name: 'HongGilDong', age: 20, kor: 100, eng: 80},
                    -->
                    <tr *ngFor="let item of students; let i = index;">
                        <td>{{i + 1}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.age}}</td>
                        <td>{{item.kor}}</td>
                        <td>{{item.eng}}</td>
                    </tr>
                    <!--
                        }
                    -->
                </table>
                <br>
                <br>
                <table class="table">
                    <tr>
                        <th>index</th>
                        <th>name</th>
                        <th>first</th>
                        <th>middle(X)</th>
                        <th>last</th>
                        <th>odd</th>
                        <th>even</th>
                    </tr>
                    <!--
                        let i = 0;
                        for(let item of students) {
                            let index = i;
                            처리....

                            i++;
                    -->
                    <tr [ngClass]="{bgColor: e}"
                    *ngFor="
                        let item of students; 
                        let i = index;
                        let f = first;
                        let m = middle;
                        let l = last;
                        let o = odd;
                        let e = even;
                    ">
                        <td>{{i}}</td>
                        <td>{{item.name}}</td>
                        <td>{{f}}</td>
                        <td>{{m}}</td>
                        <td>{{l}}</td>
                        <td>{{o}}</td>
                        <td>{{e}}</td>
                    </tr>
                    <!--
                        }
                    -->
                </table>
            </div>


        </div>
    `,
    styles: [`
        .bgColor { background-color: lightgray; }
    `]
})
export class A06Component{
    public gender:string = 'female';
    public grade: string= '아무 문자열';

    public students: Array<ObjType> = [
        {name: 'HongGilDong', age: 20, kor: 100, eng: 80},
        {name: 'NolBu', age: 50, kor: 90, eng: 90},
        {name: 'HungBu', age: 40, kor: 70, eng: 60},
    ]
    
}

// export가 붙지 않으면 같은 파일끼리만 사용 가능
interface ObjType {
    name: string;
    age: number;
    kor: number;
    eng: number;
}