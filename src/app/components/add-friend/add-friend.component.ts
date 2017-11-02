import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { PostService } from '../../services/post.service';
import { FriendRelationship } from '../../models/FriendRelationship';

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

  constructor(private route: ActivatedRoute) {
    // Get the users id from the parameter
    this.sub = this.route.params.subscribe(params => {
      this.friendID = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
  }

  ngOnInit() {
  }

}
