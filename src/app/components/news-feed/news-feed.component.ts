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
      alert("You must be logged in to view that!");
      this.router.navigate(['/']);
    }
    // End Authentication Code

  }

  user:string;

  ngOnInit() {
  }

}
