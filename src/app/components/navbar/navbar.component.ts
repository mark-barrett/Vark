import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  user:any;

  displayLogout:boolean;

  constructor() { 
    this.displayLogout = false;
    this.user = sessionStorage.getItem("user");

    if(this.user != null) {
      this.displayLogout = true;
    }
  }

  ngOnInit() {
  }

}
