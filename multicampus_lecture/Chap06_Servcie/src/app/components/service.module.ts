// service.module.ts

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DecimalPipe } from '@angular/common';

import { A01Component } from './A01.service.component';
import { ServiceComponent } from './service.component';
import { A02Component } from './A02.jumsu.component';
import { A03Component } from './A03.jumsu.component';
import { A04Component } from './A04.mock.component';
import { A03DAO } from '../service/A03_JumsuDAO.service';
import { A05Component } from './A05.promise.component';
import { A06Component } from './A06_observable.component';
import { A07Component } from './A07.observable.component';

@NgModule({
    declarations: [
        A01Component, A02Component, A03Component, A04Component, 
        A05Component, A06Component, A07Component, 
        ServiceComponent
    ],
    imports: [ CommonModule, ReactiveFormsModule ],
    exports: [ ServiceComponent ],
    providers: [ A03DAO, DecimalPipe ],
})
export class ServcieModule {}