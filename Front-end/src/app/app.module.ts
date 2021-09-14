import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// Import containers
import { DefaultLayoutComponent } from './containers';

import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppHeaderModule,
  AppSidebarModule,
  AppBreadcrumbModule
} from '@coreui/angular';
// import kendo grid ui


// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components

//import service
import {PhongbanService} from './views/shared/phongban.service';


import {ToastrModule} from 'ngx-toastr';
import { OrderComponent } from './views/order/order.component';
import { OrbanComponent } from './views/order/orban/orban.component';
import { OrmonComponent } from './views/order/ormon/ormon.component';
import { OrcashComponent } from './views/order/orcash/orcash.component';
import {HttpModule} from '@angular/http';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    AppBreadcrumbModule.forRoot(),
    AppHeaderModule,
    AppSidebarModule,
    FormsModule,
    HttpModule,
    PerfectScrollbarModule,
    //TabsModule.forRoot(),
    //ChartsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    CarouselModule.forRoot()
    
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    OrderComponent,
    OrbanComponent,
    OrmonComponent,
    OrcashComponent
  ],
  providers: [
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
