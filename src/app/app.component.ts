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
          this.cdr.detectChanges();
        });
      }
    });
  }

  private checkLoginState(): void {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    this.showHeaderFooter = loggedInUser ? this.shouldShowHeader(this.router.url) : false;

    this.cdr.detectChanges();
  }

  private shouldShowHeader(url: string): boolean {
    return url !== '/login'; // Hide header only on login page
  }
}
