// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUserSubject = new BehaviorSubject<any>(null);
  loggedInUser$ = this.loggedInUserSubject.asObservable();

  constructor() {
    // Initialize with the user from sessionStorage (if any)
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.loggedInUserSubject.next(JSON.parse(loggedInUser));
    }
  }

  login(user: any) {
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    this.loggedInUserSubject.next(user);
  }

  logout() {
    sessionStorage.removeItem('loggedInUser');
    this.loggedInUserSubject.next(null);
  }

  getLoggedInUser() {
    return this.loggedInUserSubject.value;
  }
}