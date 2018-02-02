import { Component, OnInit } from '@angular/core';
import{ShareService} from '../share.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user=[]
  constructor(private shareservice:ShareService) { 
    this.user=this.shareservice.getUser();
    console.log(this.user);
  }

  ngOnInit() {
  }

}
