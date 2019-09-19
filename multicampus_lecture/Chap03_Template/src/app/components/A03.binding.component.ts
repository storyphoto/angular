import { Component }          from '@angular/core';

@Component({
    selector: 'a03Component',
    template:`
        <div class="card-body">
            <div class="card-heading">
                <h3>3. 속성 바인딩</h3>
            </div>
            
            <div class="card-body">
                <h4>일반 바인딩</h4>
                Name: {{name}}, kor: {{kor}}, Eng: {{eng}}<br>
                Total: {{kor + eng}} / {{onTotal()}} / {{total}}<br>
                Avg: {{total / 2}} / {{onTotal() / 2}}<br>
                ID: {{hong.id}}, Address: {{hong['address']}} 
            </div>

            <!-- 이 밑 두개는 빌드시 에러로 출력됨 
            <div class="card-body">
                <h4>Safe Navigation Operator</h4>
                없는 기본형 변수 참조(표시안됨-에러없음) Age: {{age}}<br> -->
                <!-- 객체 속성은 객체를 선언하지 않거나, 객체가 초기화되지 않으면 에러 
                없는 객체형 변수 참조(?없으면 에러) user.name: {{user?.name}}
            </div>
            -->

            <div class="card-body">
                <h4>속성 바인딩</h4>
                Name: <input type="text" class="form-control" value="{{name}}"><br>

                <!-- [] 속성은 뒤의 지정값이 변수명을 의미한다 -->
                Name: <input type="text" class="form-control" [value]="name"><br>
                Name: <input type="text" class="form-control" [attr.value]="name"><br>
                Name: <input type="text" class="form-control" [(ngModel)]="name"><br>
                Name: <input type="text" class="form-control" 
                    [value]="name" (input)="changeValue($event)"><br>
                <!-- angular의 이벤트 객체 => $event -->

                <!-- 속성 바인딩의 값으로 변수명이 아닌 문자열을 직접 입력 -->
                Name: <input type="text" class="form-control" [value]="'NolBu'"><br>
            </div>

            <div class="card-body">
                Name: <input type="text" class="form-control">
            </div>
        </div>
    `
})
export class A03Component{
    public name: string = 'HongGilDong';
    public kor: number = 80;
    public eng: number = 95;
    public total: number;

    public onTotal(): number {
        this.total = this.kor + this.eng;
        return this.total;
    }

    public hong: {id: number, address: string} = {
        id: 20,
        address: 'Seoul'
    }

    public sub: Array<string> = [];

    public changeValue(evt: Event): void {
        let target: HTMLInputElement = evt.target as HTMLInputElement;
        this.name = target.value;

        
        if(this.name === 'A'){
            this.sub.push("...")
        }
    }
    
}