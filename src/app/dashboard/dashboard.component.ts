import { Component, OnInit } from '@angular/core';

import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  url="http://localhost:4000/findmatch";

  constructor() { }

  ngOnInit() {}

}
