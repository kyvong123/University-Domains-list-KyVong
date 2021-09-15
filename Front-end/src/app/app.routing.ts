import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
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
      }
    
           
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
