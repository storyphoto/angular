import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProductDetailComponent } from './product.component';
import { ProductParamComponent } from './product01.param.component';
import { ProductDataComponent } from './product02.data.component';
import { ProductArgsComponent } from './product03.args.component';
import { ProductChildComponent } from './product04.childMain.component';
import { SellerComponent } from './childComponent/seller.component';
import { DescriptionComponent } from './childComponent/description.component';
import { ProductActivateComponent } from './product05.active.component';
import { LoginGuard } from '../guard/Login.service';
import { LogoutGuard } from '../guard/Logout.service';
import { SubHomeComponent } from './company/subHome.component';
import { ContentComponent } from './company/content.component';
import { AboutComponent } from './company/about.component';
import { NotFoundComponent } from './notFound.component';

export const APP_ROUTER = RouterModule.forRoot([
    { path: '',             redirectTo: 'home',     pathMatch: "full"},     // prefix
    // { path: '',           component: HomeComponent},
    { path: 'home',       component: HomeComponent},
    { path: "product",    component: ProductDetailComponent},

    // path를 이용한 데이터 전달. 경로에 /:변수명 형태로 기술한다.
    // 필요한 만큼 여러개 사용해도 되며, 그 패스 경로와 Link 설정 경로는 같아야 한다
    // :id는 id가 변수가 되고 사용자가 link에서 지정한 패스가 값이 됨
    // 즉 http://localhost:4200/productParam/10 라면 10이 id라는 변수에 대입된다

    // ex] "productParam/:id/data/:name"
    // link => productParam/100/data/Hong
    { path: "productParam/:id",         component: ProductParamComponent},

    // 고정 데이터를 전달
    { path: 'productData/:num',         component: ProductDataComponent,
        data: [
            {check: true, name: 'HungBu', age: 20},
            {check: false, name: 'NolBu', age: 30},
        ]
    },


    // 파라미터를 이용하여 데이터를 전달. 여기서 설정은 없고 링크에서 데이터를 설정한다
    { path: 'productArgs',              component: ProductArgsComponent },


    // 하위 router-outlet 구현
    { path: 'productChild',             component: ProductChildComponent,
        children: [
            { path: 'seller/:id',         component: SellerComponent},
            { path: 'desc',               component: DescriptionComponent}
        ]
    },


    // 일정 조건을 만족해야(true) 해당 컴퍼넌트가 로드되게 한다 => CanActivate
    // 일정 조건을 만족해야(true) 로드된 화면에서 다른 컴퍼넌트로 이동 가능하게 한다 => CanDeactivate
    { path: 'productActive',            component: ProductActivateComponent,
        // 작성은 service로 만든다(로드되어 대기 상태가 됨) - providers에 올려야 한다
        // 작성한 서비스가 true / false에 따라 기능이 작동됨
        canActivate: [ LoginGuard ],
        canDeactivate: [ LogoutGuard ]
    },


    // 다중 로드 - <router-outlet>이 여러개인 경우
    // <router-outlet>이 여러개인 경우 outlet 옵션으로 로드될 위치를 지정한다
    // 지정하지 않는 경우는 primary에 로드됨
    { path: "subHome",                  component: SubHomeComponent,    outlet: "primary"},
    { path: "content",                  component: ContentComponent,    outlet: "two"},
    { path: "about",                    component: AboutComponent,      outlet: "three"},


    // Lazy Load 기술
    // 링크는 여기서 기술한 패스 "lazy/하위패스명" 형태가 된다
    { path: "lazy",         loadChildren: './components/luxuryLazy/luxuryLazy.module#LuxuryLazyModule'},

    // 위의 모든 패스가 매치되지 않는 경우 표시될 컴퍼넌트를 정의
    // 항상 맨 아래 존재해야 한다. ** => 모든 패스를 의미
    { path: "**",           component: NotFoundComponent}
  ])