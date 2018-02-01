import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



import {DataServiceService} from '../data-service.service';

import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  constructor( private profiledetails:DataServiceService,private router:Router) { }
  userdetails=[];
  ngOnInit() {
    this.profiledetails.getUserprofiledetails()
    .subscribe(resProfiles=>this.userdetails=resProfiles)
  }

}
