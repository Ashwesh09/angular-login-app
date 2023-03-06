import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration/registration.service';
import { User } from '../user';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent {
  user = new User();
  constructor( private _service : RegistrationService , private _router : Router){
    this.sample()
  }

  text : any;
  sample() {
    user : User;
    let data  = ''

 fetch('http://localhost:8080/getUser/1')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data=myJson
    console.log(data)
  });
  }

}
