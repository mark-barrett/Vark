import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

import { User } from '../../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // User information
  email:string;
  firstName:string;
  lastName:string;
  password:string;

  // The user object
  user:User;

  // Array of users to hold users when checking if the user exists
  users: Array<any>;

  // Boolean to determine if the user exists and for user error
  userExists: boolean = false;
  userError: boolean = false;

  // Result for user registration
  result:any;

  // Create the data service instance in the constructor.
  constructor(public dataService:DataService, private router: Router) { }

  ngOnInit() {
    // On the page load get all users so we can compare if the user exists
    this.dataService.getUsers()
    .subscribe(res => this.users = res);
  }

  registerUser() {

    // Assigning values to the user object
    this.user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      currentThought: "",
      about: "Nothing yet"
    }

    /* We have all the users now we need to loop through them and check
    to see if any match */
    for (var i = 0; i < this.users.length; i++) {
      if(this.users[i]["email"] == this.user.email) {
        this.userExists = true;
        this.userError = true;
      }
    }
   
   // Now we can register the user if they don't exist using the data service.
   if(!this.userExists) {
     this.result = this.dataService.registerUser(this.user);

     // Set a session variable to get user data and proove they are logged in
     sessionStorage.setItem("user", this.user.email);

     // Alert the user
     alert("You have registered successfully and will now be logged in");
     
     // Now redirect to the news feed.
     this.router.navigate(['/news-feed']);
   } else {
     alert("A user with that email already exists. Choose another or try again.");
   }
   this.userExists = false;
  }
}
