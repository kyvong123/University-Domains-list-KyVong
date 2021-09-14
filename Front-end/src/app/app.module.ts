import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// Import containers
import { DefaultLayoutComponent } from './containers';


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

    //TabsModule.forRoot(),
    //ChartsModule,

    HttpClientModule,

    
  ],
  declarations: [
    AppComponent,

  ],
  providers: [
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
