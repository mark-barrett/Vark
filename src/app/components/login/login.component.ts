import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password:string;
  email:string;
  counter:number;

  users: Array<any>;

  constructor(public dataService:DataService, private router: Router) {
    this.counter = 0;
  }

  ngOnInit() {
    // On the page load get all users so we can compare if the user exists
    this.dataService.getUsers()
    .subscribe(res => this.users = res);
  }

  login() {
    // We have to take the information and check if its correct
    for (var i = 0; i < this.users.length; i++) {
      // If the email matches
      if(this.users[i]["email"] == this.email) {
        // Check if the passwords match
        if(this.users[i]["password"] == this.password) {
          // Set the user session if its all okay!
          sessionStorage.setItem("user", this.email);
          this.router.navigate(['/profile']);
        }
        else {
          alert("The provided password is incorrect.");
          this.router.navigate(['/']);
        }
      } 
      // Its running this after every iteration. FIX IT!!
      else {
        this.counter++;
      }
    }

    /* If the number of iterations is equal to the number of users,
    the user does not exist */
    if(this.counter == this.users.length) {
      alert("That user does not exist");
      this.router.navigate(['/']);
    }
  }

}
