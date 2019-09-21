// luxuryLazy.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuxuryLazyComponent } from './luxuryLazy.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ LuxuryLazyComponent ],
    imports: [ CommonModule,

        // main module에 등록하지 않는다 (main에 등록하면 시작시 모두 로드됨)
        // 페이지의 link에서 이 모듈까지의 full path를 기술한다
        // 사용자가 클릭하면 이 모듈의 구성요소가 그때 사용자의 컴으로 로드된다
        RouterModule.forChild([
            { path: 'luxuryLazy',       component: LuxuryLazyComponent}
        ])
    ],
    exports: [],
    providers: [],
})
export class LuxuryLazyModule {}