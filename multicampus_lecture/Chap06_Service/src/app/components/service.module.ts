// service.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A01Component } from './A01.service.component';
import { ServiceComponent } from './service.component';

@NgModule({
    declarations: [
        A01Component,
        ServiceComponent
    ],
    imports: [ CommonModule ],
    exports: [ ServiceComponent ],
    providers: [],
})
export class ServcieModule {}