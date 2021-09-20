import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Headers, Http, RequestOptions,Response } from "@angular/http";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators';
import { User } from "../moldels/User.class";



@Injectable({
    providedIn: 'root'
  })
  


export class AuthService{


    authtoken:string = '';

    // constructor(private http:HttpClient, private authService: AuthService){}



    // getFavorite(){
    //     let httpOptions = {
    //         headers: new HttpHeaders({
    //             'Authorization' : ('token ' + this.authService.authtoken) 
    //         })
    //     }
    //     return this.http.get('http://localhost:8000/api/favorite',httpOptions);
    // }
    
}