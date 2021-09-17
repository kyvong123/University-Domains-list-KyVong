import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/login/login.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    // canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        // loadChildren:'./views/dashboard/dashboard.module#DashBoardModule'
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      }// },
      ,{
        path: 'cardlist',
        loadChildren: () => import('./views/card-list/card-list.module').then(mt => mt.CardListModule)
      },
      {
        path: 'newsletter1',
        loadChildren: () => import('./views/newsletter1/newsletter1.modules').then(mt => mt.NewsLetter1Module)
      }
    
           
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
