import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  constructor(private router: Router) { 

    // Start Authentication Code
    this.user = sessionStorage.getItem("user");

    if(this.user == null) {
      // Set for error message
      sessionStorage.setItem("notAuthenticated", 'True');
      this.router.navigate(['/']);
    } else {
      // Delete if logged in or accessed fairly
      sessionStorage.removeItem("notAuthenticated");
    }
    // End Authentication Code

  }

  user:string;

  ngOnInit() {
  }

}
