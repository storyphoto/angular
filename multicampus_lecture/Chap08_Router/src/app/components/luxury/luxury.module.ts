// luxury.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LuxuryComponent } from './luxury.component';

@NgModule({
    declarations: [ LuxuryComponent ],
    imports: [ CommonModule,
        // main module에 등록만 하고, main에 등록되었다는 가정하에 동일한 방법으로 사용
        RouterModule.forChild([
            { path: "luxury",       component: LuxuryComponent }
        ])
    ],
    // router의 경우 export를 하지 않아도 로드된다
    exports: [ LuxuryComponent ],
    providers: [],
})
export class LuxuryModule {}