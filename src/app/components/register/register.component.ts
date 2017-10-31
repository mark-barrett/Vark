import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string;
  firstName:string;
  lastName:string;
  password:string;

  // The user object
  user:User;
  
  result:any;

  // Create the data service instance in the constructor.
  constructor(public dataService:DataService) { }

  ngOnInit() {
  }

  registerUser() {
    // Before we do anything we must first check if this user exists already.

    // Assigning values to the user object
    this.user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }

    /* Now that we have the user object and its values
    lets register the user using the data service */
    this.result = this.dataService.registerUser(this.user);

    console.log(this.result);
  }
}
