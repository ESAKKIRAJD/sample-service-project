import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http,Response } from '@angular/http';
import { Validators } from '@angular/forms';

import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private profileService:DataServiceService,private router:Router) { }
  user=[];
  ngOnInit() {
  }
  onProfile(value){
    console.log(value)
    this.profileService.onProfile(value).subscribe(res=>{
     console.log(res);
       this.user=res;
       this.router.navigate(['/dashboard']);
     });
      }

}
