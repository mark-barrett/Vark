import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // The current logged in users id.
  loggedInUser:string;

  // Hold specified user id
  user:string;

  // The user object that was retrieved after giving the id
  userObj:any;

  // Property for the subscription to get parameter
  private sub:any;

  // Users posts
  userPosts:Array<any>;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService,
    private postService: PostService) { 
    // Start Authentication Code
    this.loggedInUser = sessionStorage.getItem("user");
    
    if(this.loggedInUser == null) {
      // Set for error message
      alert("You must be logged in to view that!");
      this.router.navigate(['/']);
    }
    // End Authentication Code

    // Get the users id from the parameter
    this.sub = this.route.params.subscribe(params => {
      this.user = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
   });

   // Check to see if the logged in user is trying to find their profile and if so send them there
   if(this.user == sessionStorage.getItem("user")) {
     this.router.navigate(['/profile']);
   }

   // Now lets get that user
   this.getUser();
  }

  getUser() {
    // Get the user based on the sessionStorage
    this.dataService.getAnonymousUser(this.user)
    .subscribe(res => {
      this.userObj = res;

      // While we are asynchronous we may aswell grab the posts too!
      this.postService.getUserPosts(this.userObj["email"])
      .subscribe(res => {
        this.userPosts = res;
      })
    });
  }

  ngOnInit() {
  }

}
