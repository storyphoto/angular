// form.module.ts

// 내부모듈
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// 컴퍼넌트
import { A01Component } from './A01_NgForm';
import { FormComponent } from './form.component';
import { A02Component } from './A02_FormGroup';
import { A03Component } from './A03_FormArray';
import { A04Component } from './A04_FormGroupValidation';

@NgModule({
    declarations: [
        A01Component, A02Component, A03Component, A04Component,
        FormComponent
    ],
    // FormsModule => view에서의 form 요소 관리 및 양방향 바인딩
    // ReactivFormsModule => controller에서의 form 요소 관리 
    imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
    exports: [ FormComponent ],
    providers: [],
})
export class FormModule {}