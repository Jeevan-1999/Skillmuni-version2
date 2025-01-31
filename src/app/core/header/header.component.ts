import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeLink: string = '';
  userProfileImg = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;

  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  // logout or signout to login page function
  auth = inject(AuthService)

  signOut() {
    sessionStorage.removeItem("loggedInUser")
    this.auth.signOut();
  }
}
