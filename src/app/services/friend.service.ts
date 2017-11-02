import { Injectable } from '@angular/core';
import { User } from '../models/User';

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

}
