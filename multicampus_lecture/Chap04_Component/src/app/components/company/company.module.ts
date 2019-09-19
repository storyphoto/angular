// company.module.ts

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { A01Component } from './A01.parent.component';
import { A02Component, A02OneComponent } from './A02.input.component';
import { A03Component, A03OneComponent } from './A03.output.component';
import { A04Component, A04OneComponent, A04TwoComponent } from './A04.inOutput.component';
import { CompanyComponent } from './company.component';
import { A01Child } from './A01.child.component';
import { A01Grand } from './A01.grand.component';

@NgModule({
    declarations: [
        A01Component, A01Child, A01Grand, 
        A02Component, A02OneComponent, A03Component, A03OneComponent, 
        A04Component, A04OneComponent, A04TwoComponent,
        CompanyComponent
    ],
    imports: [ CommonModule, FormsModule ],
    exports: [ CompanyComponent ],
    providers: [],
})
export class CompanyModule {}