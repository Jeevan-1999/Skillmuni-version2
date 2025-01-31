import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showHeaderFooter = true;
  title = 'skillmuni-version2';

  constructor(private router: Router, private cdr: ChangeDetectorRef, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.checkLoginState();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.ngZone.run(() => {
          this.showHeaderFooter = this.shouldShowHeader(event.url);

          // Force UI update
          this.cdr.detectChanges();

          // Scroll to top
          window.scrollTo(0, 0);
        });
      }
    });
  }

  // Check if a user is logged in based on session storage
  private checkLoginState(): void {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    const currentUrl = this.router.url;

    if (loggedInUser) {
      this.showHeaderFooter = this.shouldShowHeader(currentUrl);
    } else {
      this.showHeaderFooter = false;
    }

    // Force UI update
    this.cdr.detectChanges();
  }

  private shouldShowHeader(url: string): boolean {
    return url !== '/login'; // Hide header only on login page
  }
}
