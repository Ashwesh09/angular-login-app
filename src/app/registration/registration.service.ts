import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/loginUser",user)
  }
  public registerUserFromRemote(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registerUser",user)
  }
}
