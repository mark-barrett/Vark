import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  register:boolean;

  constructor() { 
    this.register = true;

  }

  ngOnInit() {
  }

  changeComponent() {
    this.register = !this.register;
  }

}
