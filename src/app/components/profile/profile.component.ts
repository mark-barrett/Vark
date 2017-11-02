import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  CurrentThought:any = "";
  constructor() {

  }

  ngOnInit() {
  }
  thought(though:any){
    this.CurrentThought= though;
 
  }
  post(){

  }

}
