import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration/registration.service';
import { User } from '../user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  user = new User();
  msg = '';
  pass: any;
  constructor( private _service : RegistrationService , private _router : Router){

  }
  ngOnInit(): void {
    if(this.user.password === this.pass){

    }
    else{
      this.msg = "Password mismatch"
    }
  }

  registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{
        if(this.user.password === this.pass){
        console.log("response received");
        this.msg = "Registration successful"
        this._router.navigate([''])
      }
      else{
        this.msg = "Password mismatch"
      }
      } ,
      error =>{
        console.log("Exception occurred: " + error.email);
        this.msg = "Error Occured"

      }
    )

  }
}
