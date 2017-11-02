import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Post } from '../models/Post';
import { User } from '../models/User';

import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  result:any;

  constructor(private _http: Http) { }

  // Create a post
  createPost(post:Post) {
    // Convert the post object to JSON
    let body = JSON.stringify(post);
    /* Create the headers to tell the API we are using
    JSON */
    let headers = new Headers({'Content-Type': 'application/json'});
    // Set these in options
    let options = new RequestOptions({ headers: headers });

    // Make the request
    return this._http.post("/api/posts", body, options)
    .map((data:any) => data.json())
    .subscribe();
  }

  // Get all posts based on user
  getUserPosts(user:string) {
    return this._http.get("/api/posts/"+user)
    .map(result => this.result = result.json().data);
  }
}
