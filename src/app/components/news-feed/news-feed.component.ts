import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';
import { User } from '../../models/User';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  // Session user
  user:string;
  
  // User from database
  dbUser:any;
  
  // Users posts from database
  dbPosts:any;

  // Post body for new post
  postBody:string;

  // New post
  postObj:Post;

  result:any;

  // Updated user
  updatedUser:User;

  // Current thought
  currentThought:string;

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
    this.getPosts();
  }

  getUser() {
    // Get the user based on the sessionStorage
    this.dataService.getUser(sessionStorage.getItem("user"))
    .subscribe(res => {
      this.dbUser = res;
    });
  }

  getPosts() {
    // Get the users posts
    this.postService.getUserPosts(sessionStorage.getItem("user"))
    .subscribe(res => {
      this.dbPosts = res;
    })
  }

  post() {
    // Create the post object
    this.postObj = {
      email: sessionStorage.getItem("user"),
      body: this.postBody,
      time: new Date().getMinutes().toString(),
      date: new Date().toString()
    }

    // Post it to the API
    this.result = this.postService.createPost(this.postObj);
  }
}
