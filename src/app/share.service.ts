import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';



@Injectable()
export class ShareService {

  user:any={};

  constructor() { }

  setUser(value){
    this.user=value;
  }
  getUser(){
    return this.user;
  }

}
