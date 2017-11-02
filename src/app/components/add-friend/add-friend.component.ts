import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { PostService } from '../../services/post.service';
import { FriendService } from '../../services/friend.service';
import { FriendRelationship } from '../../models/FriendRelationship';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {

  // Result for subscription
  private sub:any;

  // Friend id
  friendID:string;

  // User email
  userEmail:string;

  // User (logged in)
  user:any;

  // Friend user
  friendUser:any;

  // Friend relationship
  friendRelationship:FriendRelationship;

  constructor(private route: ActivatedRoute, private router: Router, private dataService:DataService,
  private friendService:FriendService) {

    // Start Authentication Code
    this.userEmail = sessionStorage.getItem("user");
    
    if(this.userEmail == null) {
      // Set for error message
      alert("You must be logged in to view that!");
      this.router.navigate(['/']);
    }
    // End Authentication Code

    // Get the users id from the parameter
    this.sub = this.route.params.subscribe(params => {
      this.friendID = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });

    // Get the logged in user
    this.dataService.getUser(sessionStorage.getItem("user"))
    .subscribe(res => {
      this.user = res;
      
      // Get the anonymous user (friend)
      // Get the user based on the sessionStorage
      this.dataService.getAnonymousUser(this.friendID)
      .subscribe(res => {
        this.friendUser = res;

        // Create the friendship object
        this.friendRelationship = {
          friend1: this.user["_id"],
          friend1Name: this.user["firstName"]+""+this.user["lastName"],
          friend1Profile: this.user["profile"],
          friend2: this.friendID,
          friend2Name: this.friendUser["firstName"]+this.friendUser["lastName"],
          friend2Profile: this.friendUser["profile"]
        }

        // Send this to the service.
        this.sub = this.friendService.createFriendship(this.friendRelationship);

        alert("You are now friends!");
        this.router.navigate(['/friends']);

      });
    });
    

  }

  ngOnInit() {
    // We need to get the current logged in user.
  }

}
