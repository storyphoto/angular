import { Component } from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>1. Template Base Form</h3>
            </div>
            <div class="card-body">
                <div>
                    MyForm Value: {{myForm.value | json}}<br>
                    MyForm Valid: {{myForm.valid}}<br>
                </div>
                <br>

                <!-- ngForm myForm = new ngForm() -->
                <form #myForm="ngForm" (submit)="sendData(myForm.value)">
                    <div>
                        <label>UserName: {{firstName}} / {{lName.value}}</label>
                        <!-- 
                            ngModel이 form 태그 내부에서 사용되는 경우 name 속성이 있어야 한다 
                            기술하지 않으면 에러 발생
                        -->
                        <input type="text" class="form-control" name="fName" [(ngModel)]="firstName">
                        <input type="text" class="form-control" name="lName" ngModel #lName="ngModel">
                    </div>
                    <br>

                    <div>
                        <label>SSN:</label>
                        <input type="text" class="form-control" name="ssn" ngModel required>
                    </div>
                    <br>

                    <div>
                        <label>Password:</label>
                        <input type="text" class="form-control" name="pw" ngModel>
                    </div>
                    <br>

                    <div>
                        <label>Confirm password : </label>
                        <input type="password" class="form-control" name="repw" ngModel>
                    </div>
                    <br>

                    <div>
                        <label>Department : </label>
                        <select class="form-control" name="dept" ngModel>
                            <option *ngFor="let item of ary">{{item}}</option>
                        </select>
                    </div>
                    <br>
                    
                    <button class="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </div>
    `
})
export class A01Component{
    public ary: string[] = ['Salary', 'Department']
    public dept: string = 'Salary';
    public firstName: string = 'Hong';
    public lastName: string = "GilDong"


    public sendData(data: any): void {
        console.log(data);

        // HTTP Service를 이용해서 서버에 전달 구현
    }
    
}
