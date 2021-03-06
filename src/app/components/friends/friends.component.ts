import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { PostService } from '../../services/post.service';
import { FriendService } from '../../services/friend.service';
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

  // User id
  userID:string;

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

  // Found users
  foundUsers:Array<any> = [];

  // Users friends
  friendsFromDB:Array<any>;

  constructor(public dataService:DataService, public postService:PostService, private router: Router,
  public friendService:FriendService) { 
    
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

      this.userID = this.dbUser["_id"];

      // While we are here get the friends
      this.friendService.getFriends(this.dbUser["_id"])
      .subscribe(res => this.friendsFromDB = res);
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
      // If the first name contains the search or the last name
      if(this.users[i].firstName.toLowerCase().indexOf(this.friendSearch.toLowerCase()) >= 0
      || this.users[i].lastName.toLowerCase().indexOf(this.friendSearch.toLocaleLowerCase()) >= 0) {
        
        if(this.users[i].email != sessionStorage.getItem("user")) {
          this.foundUsers.push(this.users[i]);
        }
      }
    }
  }
}
