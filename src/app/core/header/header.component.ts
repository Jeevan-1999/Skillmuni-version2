import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeLink: string = '';
  userProfileImg = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;

  constructor(private router: Router) { }

  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  // logout or signout to login page function
  auth = inject(AuthService)

  signOut() {
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
    this.router.navigate(['/login']).then(() => {
      window.location.reload(); // Ensures `showHeaderFooter` is updated correctly
    });
  }
}