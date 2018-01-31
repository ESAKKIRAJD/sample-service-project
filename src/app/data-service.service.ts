import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {

  newUser:any;
  loginUser:any;
   forgotUser:any;
   profileUser:any;


  constructor(private http:Http) {}

  onRegister(value){
    console.log(value)
      return this.http.post('http://localhost:4000/register',value)
      .map(result => this.newUser = result.json())
  }
   onLogin(value){
    console.log(value);
    return this.http.post('http://localhost:4000/findmatch',value)
    .map(result =>this.loginUser=result.json())
  }
  onForgot(value){
    console.log(value);
     return this.http.post('http://localhost:4000/forgotpwd',value)
     .map(result =>this.forgotUser=result.json())
  }
  
  onProfile(value){
    console.log(value);
     return this.http.post('http://localhost:4000/updateprofile',value)
     .map(result =>this.profileUser=result.json())
  }
}
