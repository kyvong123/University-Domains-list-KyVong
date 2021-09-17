import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RequestOptions } from "@angular/http";

@Injectable()

export class AuthService{
    constructor(private http:HttpClient){}
    getUser(username, password){
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });

        return this.http.post("http://localhost:8000/api-auth/",{
            username,
            password
        })
            
    }
    
}