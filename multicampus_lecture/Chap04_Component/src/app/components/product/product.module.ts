// product.module.ts

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { A05Component, A05OneComponent } from './A05.viewChild.component';
import { ProductComponent } from './product.component';
import { A06Component, A06OneComponent } from './A06.projection.component';
import { A07Component, A07OneComponent } from './A07.life.component';
import { A08Component, A08OneComponent } from './A08.host.component';

@NgModule({
    declarations: [
        A05Component, A05OneComponent, A06Component, A06OneComponent,
        A07Component, A07OneComponent, A08Component, A08OneComponent,
        ProductComponent
    ],
    imports: [ CommonModule, FormsModule ],
    exports: [ ProductComponent ],
    providers: [],
})
export class ProductModule {}