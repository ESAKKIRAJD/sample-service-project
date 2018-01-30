import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,public regService:DataServiceService) {}

  ngOnInit() {
  }

  onRegister(value){
  this.regService.onRegister(value).subscribe(res =>{
    console.log(res);
    this.router.navigate(['/login']);
    
  });
  };
}
