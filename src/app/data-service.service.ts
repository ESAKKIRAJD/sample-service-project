import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {

  Result:any;

  constructor(private http:Http) {}

  onRegister(value){
    console.log(value);
      return this.http.post('http://localhost:4000/register',value)
      .map(result => this.Result = result.json())
  }
}
