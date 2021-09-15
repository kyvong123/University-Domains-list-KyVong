import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { University } from '../moldels/University.class';
import { UniversityService } from '../serrvice/University.service';
import { map } from 'rxjs/operators';
import {Response} from '@angular/http';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public loading = false;
  public universities: University[];

  

  ngOnInit(): void {

    }

    
}

