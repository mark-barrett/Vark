import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { PostService } from '../../services/post.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // Session user
  user:string;

  // User from database
  dbUser:any;
  
  // Users posts from database
  dbPosts:any;

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
    // Get the user based on the sessionStorage
    this.dataService.getUser(sessionStorage.getItem("user"))
    .subscribe(res => {
      this.dbUser = res;
    });

    // Get the users posts
    this.postService.getUserPosts(sessionStorage.getItem("user"))
    .subscribe(res => {
      this.
    })
  }



}
