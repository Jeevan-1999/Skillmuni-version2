// app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showHeaderFooter = true;
  title = 'skillmuni-version2';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    // Check login state on initialization
    this.checkLoginState();

    // Update header/footer visibility on route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeaderFooter = this.shouldShowHeader(event.url);
      }
    });

    // Subscribe to login state changes
    this.authService.loggedInUser$.subscribe((user) => {
      this.showHeaderFooter = user ? this.shouldShowHeader(this.router.url) : false;
    });
  }

  private checkLoginState(): void {
    const loggedInUser = this.authService.getLoggedInUser();
    this.showHeaderFooter = loggedInUser ? this.shouldShowHeader(this.router.url) : false;
  }

  private shouldShowHeader(url: string): boolean {
    return url !== '/login'; // Hide header only on login page
  }
}