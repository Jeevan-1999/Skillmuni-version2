import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  activeLink: string = 'home';

  constructor(private router: Router, private authService: AuthService) {
    // Detect route changes to update active link
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.urlAfterRedirects.split('/')[1] || 'home';
      }
    });
  }

  setActiveLink(link: string) {
    this.activeLink = link;
    this.router.navigate([`/${link}`]); // Navigate to the selected route
  }
}
