import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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

  // Property for the subscription to get parameter
  private sub:any;

  constructor(private router: Router, private route: ActivatedRoute) { 
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
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }

  ngOnInit() {
  }

}
