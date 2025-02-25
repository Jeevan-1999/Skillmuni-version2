import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  userProfileImg = JSON.parse(localStorage.getItem('loggedInUser')!).picture;
  name = JSON.parse(localStorage.getItem('loggedInUser')!).name;

  constructor(

  ) { }

  ngOnInit(): void {

  }


}
