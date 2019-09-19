import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'a02Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>2. Model Base Form</h3>
            </div>
            <div class="card-body">
                <div>
                    MyForm Value: {{myForm.value | json}}<br>
                    MyForm Valid: {{myForm.valid}}<br>
                    <br>
                    FirstName Value: {{myForm.get('name').get('fName').value}}<br>
                    FirstName Valid: {{myForm.get('name').get('fName').valid}}<br>
                </div>
                <br>

                <!-- formGroup을 적용 -->
                <form [formGroup]="myForm" (submit)="sendData()">
                    <div formGroupName="name">
                        <label>UserName:</label>
                        <!--
                            public name: FormControl = new FormControl('')
                            formControl()을 독립적으로 사용할 경우는 [formControl]='name'로 호출
                            formControl()을 form 태그 내부세어서 사용할 경우는 formControlName으로 호출
                            둘 다 name 속성이 필요없다
                        -->
                        <input type="text" class="form-control" formControlName="fName">
                        <input type="text" class="form-control" formControlName="lName">
                    </div>
                    <br>

                    <div>
                        <label>SSN: {{getSSN()}}</label>
                        <input type="text" class="form-control" formControlName="ssn">
                    </div>
                    <br>

                    <div>
                        <label>Password:</label>
                        <input type="text" class="form-control" formControlName="pw">
                    </div>
                    <br>

                    <div>
                        <label>Confirm password : </label>
                        <input type="password" class="form-control" formControlName="repw">
                    </div>
                    <br>

                    <div>
                        <label>Department : </label>
                        <select class="form-control" formControlName="dept">
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
export class A02Component{
    public ary: string[] = ['Salary', 'Department']
    public dept: string = 'Salary';
    public firstName: string = 'Hong';
    public lastName: string = "GilDong";

    public myForm: FormGroup;

    ngOnInit(): void {
        this.myForm = new FormGroup({
            // view 구조도 동일하게 작성해야 한다. 
            // 하위 formGroup은 태그에서 formGroupName으로 호출 해야 한다
            'name': new FormGroup({
                fName: new FormControl(this.firstName),
                lName: new FormControl(''),
            }),
            'ssn': new FormControl(''),
            pw: new FormControl(''),
            repw: new FormControl(''),
            dept: new FormControl(''),
        })
    }

    public sendData(): void {
        console.log(this.myForm.value);

        // myForm.name
        // myForm['name']
    }

    public getSSN(): string {
        return this.myForm.get('ssn').value;
    }
    
}
