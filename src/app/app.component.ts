import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showHeaderFooter = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          this.showHeaderFooter = this.shouldShowHeader(event.urlAfterRedirects);
        }
      });

    this.showHeaderFooter = this.shouldShowHeader(this.router.url);
  }

  private shouldShowHeader(url: string): boolean {
    return !url.startsWith('/login');
  }
}
