import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {DataViewModule} from 'primeng/dataview';
import { CardListComponent } from './card-list.component';
import { CardListRoutingModule } from './card-list-routing.module';
import {Dropdown, DropdownModule} from 'primeng/dropdown';

@NgModule({
  imports: [
    FormsModule,
    CardListRoutingModule,
    ChartsModule,
    DataViewModule,
    DropdownModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ CardListComponent ]
})
export class CardListModule { }
