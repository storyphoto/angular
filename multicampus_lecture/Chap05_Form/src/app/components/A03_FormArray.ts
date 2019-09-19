import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
    selector: 'a03Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>3. Model Base Form</h3>
            </div>
            <div class="card-body">
                <div>
                    MyForm Value: {{myForm.value | json}}<br>
                    MyForm Valid: {{myForm.valid}} / {{ isValid() }}<br>
                    <br>
                    FirstName Value: {{myForm.get('name').get('0').value}}<br>
                    FirstName Valid: {{myForm.get('name').get('1').valid}}<br>
                    Name: {{getName()}}
                </div>
                <br>

                <!-- formGroup을 적용 -->
                <form [formGroup]="myForm" (submit)="sendData()">

                    <!-- formGroupName => formArrayName -->

                    <div formArrayName="name">
                        <label>UserName:</label>
                        <!--
                            formControlName="fName" => formControlName="0"
                        -->
                        <input type="text" class="form-control" formControlName="0">
                        <input type="text" class="form-control" formControlName="1">
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
export class A03Component{
    public ary: string[] = ['Salary', 'Department']
    public dept: string = 'Salary';
    public firstName: string = 'Hong';
    public lastName: string = "GilDong";

    public myForm: FormGroup;

    ngOnInit(): void {
        this.myForm = new FormGroup({
            // group => {}
            // array => [], key가 존재하지 않는다. 참조는 index 번호로 참조한다
            // EX) myForm.get('name').get('0')....
            'name': new FormArray([
                new FormControl(this.firstName),
                new FormControl(''),
            ]),
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

    public getName(): string {
        return `${this.myForm.get('name').get('0').value} ${this.myForm.get('name').get('1').value}`
    }

    // valid
    public isValid(): boolean {
        return this.myForm.valid;
    }
    
}
