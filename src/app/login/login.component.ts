import { RegistrationService } from './../registration/registration.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';
  constructor( private _service : RegistrationService , private _router : Router){

  }
  ngOnInit(): void {
  }

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response received");
        this._router.navigate(['/loginsuccess'])
      } ,
      error =>{
        console.log("Exception occurred: " + error.email);
        this.msg = "Bad Credentials, please try enter valid Email or password"

      }
    )

  }


}
