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

  // Actual friend objects
  friends:Array<any> = [];

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

    // Lets get that users friends for listing!
    this.friendService.getFriends(this.user)
    .subscribe(res => this.friendsFromDB = res);

    /* Now we must loop through these friends, take the column that
    is not the logged in users and search the users for it and add it
    to the friends array */
    for(var i=0; i<this.friends.length; i++) {
      // Check if the the logged in user is the first column.
      if(this.friends["friend1"] == sessionStorage.getItem("user")) {
        // Now that we know its the first column, the second column is the friends id.
        for(var j=0; j<this.users.length; j++) {
          // If that matches
          if(this.users[j]._id == this.friends["friend2"]) {
            // Push the user onto the friends array
            this.friends.push(this.users[j]);
          }
        }
      }
      // If not its in the second.
      else {
        // Now that we know its the second, the first column is the friends id.
        for(var j=0; j<this.users.length; j++) {
          // If that matches
          if(this.users[j]._id == this.friends["friend1"]) {
            // Push the user onto the friends array
            this.friends.push(this.users[j]);
          }
        }
      }
    }
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
