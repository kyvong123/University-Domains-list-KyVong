import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { UniversityService } from '../service/University.service';
import { University } from '../moldels/University.class';
import {map} from 'rxjs/operators';
import {Response} from '@angular/http';
import {SelectItem} from 'primeng/api';
import {Message} from 'primeng/api';

@Component({
  templateUrl: 'card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {



  loading = false;
  
  universities: University[] = [];

  sortOptions: SelectItem[] = [];

  msgs: Message[] = [];
  
  sortKey: string = '';

  sortField: string = '';

  sortOrder: number = 0;


  constructor(private service: UniversityService ) { }
  images: any[];
  ngOnInit() {
    this.loadData();
    this.sortOptions = [
      {label: 'Name', value: 'name'},
      {label: 'Country', value: 'country'},
  ];
  }
  

  public ngAfterViewInit(): void {

  }

  
  //thay đổi dữ liệu khi chuyển trang

  //load dữ liệu 
  loadData(): any {
    this.loading=true;
    this.service.getUniversity().pipe(map((data:Response)=>{
        return data.json() as University[];
    })).toPromise().then(
      x=>{
        this.universities = x;
        this.universities.reverse();
        this.loading = false;
      }
    );

    let a = 5;


  }
  


onSortChange(event) {
  let value = event.value;

  if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
  }
  else {
      this.sortOrder = 1;
      this.sortField = value;
  }
}

}

