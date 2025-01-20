import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showHeaderFooter: boolean = true; // Declare and initialize the property

  title = 'skillmuni-version2';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // List of routes where the header and footer should be hidden
        const hiddenRoutes = ['/login'];
        this.showHeaderFooter = !hiddenRoutes.includes(event.urlAfterRedirects);
      }
    });
  }
}