import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  activeLink: string = 'home';
  userProfileImg = JSON.parse(localStorage.getItem('loggedInUser')!).picture;


  constructor(private router: Router, private authService: AuthService) {


    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.urlAfterRedirects.split('/')[1] || 'home';
      }
    });

    // Get the user profile image from the logged-in user
    const loggedInUser = this.authService.getLoggedInUser();
    this.userProfileImg = loggedInUser ? loggedInUser.picture : '';
  }

  signOut() {
    this.authService.logout();
    this.router.navigate(['/login']).then(() => {
      window.location.reload(); // Ensures showHeaderFooter is updated correctly
    });
  }

  setActiveLink(link: string) {
    this.activeLink = link;
    this.router.navigate([`/${link}`]); // Navigate to the selected route
  }
}