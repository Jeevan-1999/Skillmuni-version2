// header.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  activeLink: string = '';
  userProfileImg: string;

  constructor(private router: Router, private authService: AuthService) {
    // Get the user profile image from the logged-in user
    const loggedInUser = this.authService.getLoggedInUser();
    this.userProfileImg = loggedInUser ? loggedInUser.picture : '';
  }

  signOut() {
    this.authService.logout();
    this.router.navigate(['/login']).then(() => {
      window.location.reload(); // Ensures `showHeaderFooter` is updated correctly
    });
  }

  setActiveLink(link: string) {
    this.activeLink = link;
    this.router.navigate([`/${link}`]); // Navigate to the selected route
  }
}