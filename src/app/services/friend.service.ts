import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { FriendRelationship } from '../models/FriendRelationship';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class FriendService {

  result:any;

  constructor(private http: Http) { }

  getFriends(user:string) {
    // Takes users id in and finds all of their friends
    return this.http.get("/api/friends/"+user)
    .map(result => this.result = result.json().data);
  }

  createFriendship(friendship:FriendRelationship) {
    // Convert the user object to JSON
    let body = JSON.stringify(friendship);
    /* Create the headers to tell the API we are using
    JSON */
    let headers = new Headers({'Content-Type': 'application/json'});
    // Set these in options
    let options = new RequestOptions({ headers: headers });

    // Make the request
    return this.http.post("/api/friends", body, options)
    .map((data:any) => data.json())
    .subscribe();
  }

}
