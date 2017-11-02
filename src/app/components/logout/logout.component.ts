import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { 
    if(sessionStorage.getItem("user") == null) {
      this.router.navigate(['/']);
    }
    else {
      // Remove the user session
      sessionStorage.removeItem("user");
      alert("You have now been logged out.");
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

}
