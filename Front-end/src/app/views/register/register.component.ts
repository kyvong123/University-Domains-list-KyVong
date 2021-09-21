import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../moldels/Admin.class';
import { AuthService } from '../serrvice/Auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  admin: Admin ={
    username:'',
    email:'',
    password:''
  }

  myform: FormGroup;

  constructor(private authService:AuthService, private router :Router) { }
  ngOnInit():void{
    this.myform = new FormGroup({
      username: new FormControl(''),
      email: new FormControl('')
    })
  }
  get f(){
    return this.myform.controls;
  }
  registerUser($event)
  {
      this.admin ={
        username:this.f.username.value,
        email:this.f.email.value,
        password:'pbkdf2_sha256$260000$ojRFSPrAII9vLYiXj0b1ok$4BFUTM7JHpzVJu1BL/iEB6Z2wCb2oFesrnmSsBp9GWk='
      }
      this.authService.postAdmin(this.admin).subscribe(
        data=>{
          this.router.navigate['/login']
          console.log('dang ky thanh cong')
        }
      )
  }
}
