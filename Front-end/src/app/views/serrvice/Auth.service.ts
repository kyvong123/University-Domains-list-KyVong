import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Headers, Http, RequestOptions,Response } from "@angular/http";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators';
import { User } from "../moldels/User.class";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type' : 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
  })
  


export class AuthService{
    api_url: string = 'http://localhost:8000/';
    constructor(private http:HttpClient){}
    getUser(username:string,password:string) {
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
          
        return this.http.post<any>(this.api_url + `accounts/api/auth/`,
        {username, password},httpOptions).pipe(
            map(user=>{
                    console.log("vao day")
                    if (user && user.token) {
                        localStorage.setItem("currentUser", JSON.stringify(user))
                    }              
                    return user;
            }));
            
    }
    
}