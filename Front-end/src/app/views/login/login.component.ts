import { Component } from '@angular/core';
import { AuthService } from '../serrvice/Auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 

  constructor(private authService:AuthService){}
  loginUser(event)
  {
    event.preventDefault();
    const username = event.target.querySelector('#username').value;
    const password = event.target.querySelector('#password').value;
    console.log(username,password);
    this.authService.getUser(username, password).subscribe(
      data =>{
        // if (data.success){

        // }
        // else{
        //   window.alert(data.message)
        // }
      }
    )
  }
}
