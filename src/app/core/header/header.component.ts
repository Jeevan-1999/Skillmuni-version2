import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeLink: string = '';
  userProfileImg = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;

  constructor(private router: Router) { }





  signOut() {
    sessionStorage.removeItem("loggedInUser");
    this.router.navigate(['/login']).then(() => {
      window.location.reload(); // Ensures `showHeaderFooter` is updated correctly
    });
  }

  setActiveLink(link: string) {
    this.activeLink = link;
    this.router.navigate([`/${link}`]); // Navigate to the selected route
  }
}