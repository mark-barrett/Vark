import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';
import { User } from '../../models/User';

import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  // Session user
  user:string;

  // User from database
  dbUser:any;

  result:any;

  // Updated user
  updatedUser:User;

  // Used for editing the profile
  about:string;
  profile:string;

  // for users
  users:Array<any>;

  // Search query
  friendSearch:string;

  constructor(public dataService:DataService, public postService:PostService, private router: Router) { 
    
  // Start Authentication Code
  this.user = sessionStorage.getItem("user");

  if(this.user == null) {
    // Set for error message
    alert("You must be logged in to view that!");
    this.router.navigate(['/']);
  }
  // End Authentication Code

  }

  ngOnInit() {
    // Put in seperate methods so they can be called again
    this.getUser();

    // On the page load get all users so we can compare if the user exists
    this.dataService.getUsers()
    .subscribe(res => this.users = res);
  }

  getUser() {
    // Get the user based on the sessionStorage
    this.dataService.getUser(sessionStorage.getItem("user"))
    .subscribe(res => {
      this.dbUser = res;
    });
  }

  updateAccount() {
    // Construct the user object.
    this.updatedUser = {
      firstName: this.dbUser["firstName"],
      lastName: this.dbUser["lastName"],
      email: this.dbUser["email"],
      password: this.dbUser["password"],
      profile: this.profile,
      currentThought: this.dbUser["currentThought"],
      about: this.about,
    }

    this.result = this.dataService.updateUser(this.updatedUser);
    alert("Profile information updated!");
    this.getUser();
  }

  searchFriends() {
    // search the users for what was searched.
    for (var i = 0; i < this.users.length; i++) {
      if(this.users[i]["email"] == this.user.email) {

      }
    }
  }
}
