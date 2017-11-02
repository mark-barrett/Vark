import { Injectable } from '@angular/core';
import { User } from '../models/User';

import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get("/api/users")
    .map(result => this.result = result.json().data);
  }

  getUser(user:string) {
    var url = "/api/users/"+user;
    return this._http.get(url)
    .map(result => {
      return result.json().data;
    });
  }

  registerUser(user:User) {
    // Convert the user object to JSON
    let body = JSON.stringify(user);
    /* Create the headers to tell the API we are using
    JSON */
    let headers = new Headers({'Content-Type': 'application/json'});
    // Set these in options
    let options = new RequestOptions({ headers: headers });

    // Make the request
    return this._http.post("/api/users", body, options)
    .map((data:any) => data.json())
    .subscribe();
  }

  updateUser(user:User) {
    // Convert the user object to JSON
    let body = JSON.stringify(user);
    /* Create the headers to tell the API we are using
    JSON */
    let headers = new Headers({'Content-Type': 'application/json'});
    // Set these in options
    let options = new RequestOptions({ headers: headers });

    // Make the request
    return this._http.post("/api/users"+user.email, body, options)
    .map((data:any) => data.json())
    .subscribe();
  }


}
