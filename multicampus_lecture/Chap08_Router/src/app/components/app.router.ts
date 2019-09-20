import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProductDetailComponent } from './product.component';
import { ProductParamComponent } from './product01.param.component';
import { ProductDataComponent } from './product02.data.component';
import { ProductArgsComponent } from './product03.args.component';
import { ProductChildComponent } from './product04.childMain.component';
import { SellerComponent } from './childComponent/seller.component';
import { DescriptionComponent } from './childComponent/description.component';

export const APP_ROUTER = RouterModule.forRoot([
    { path: '',           component: HomeComponent},
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
    }

  ])