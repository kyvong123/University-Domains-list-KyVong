import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import{OrderComponent} from './views/order/order.component'


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'order',
    component: OrderComponent,
    data: {
      title: 'Order'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
     
      {
        path: 'hanghoa',
        loadChildren: './views/hanghoa/hanghoa.module#HangHoaModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
     {
       path: 'phongban',
       loadChildren: './views/phong-ban/phong-ban.module#PhongBanModule'
     },
     {
      path: 'phieunhap',
      loadChildren: './views/phieunhap/phieunhap.module#PhieuNhapModule'
    },
    {
      path: 'nhaphang',
      loadChildren: './views/nhaphang/nhaphang.module#NhapHangModule'
    },
    {
      path: 'thongketonkho',
      loadChildren: './views/thong-ke/thong-ke.module#ThongKeModule'
    },
    {
      path: 'baocaonhaphang',
      loadChildren: './views/baocaonhaphang/baocaonhaphang.module#BaoCaoNhapHangModule'
    }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
