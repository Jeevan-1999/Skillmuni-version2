import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

declare global {
  interface Window {
    googleSDKLoaded: () => void;
    gapi: any; // Adding type for gapi
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('loginRef', { static: true }) loginElement!: ElementRef<HTMLButtonElement>;
  auth2: any; // Holds the Google Auth2 instance

  ngAfterViewInit(): void {
    this.initializeGoogleSDK();
  }

  /**
   * Initialize the Google SDK and attach the click handler.
   */
  initializeGoogleSDK(): void {
    // Define the global function to load the Google SDK
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        // Initialize Google Auth2 client
        this.auth2 = window['gapi'].auth2.init({
          client_id: '1025254397639-mocgceq025hus667gsotk68iu3huh2he.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email',
        });

        // Prepare the login button once auth2 is initialized
        this.attachLoginHandler();
      });
    };

    // Dynamically load the Google Platform script
    this.loadGoogleScript();
  }

  /**
   * Load the Google Platform script dynamically.
   */
  private loadGoogleScript(): void {
    const scriptId = 'google-jssdk';
    const scriptElement = document.getElementById(scriptId) as HTMLScriptElement;

    if (!scriptElement) {
      const js = document.createElement('script');
      js.id = scriptId;
      js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
      js.async = true;
      js.defer = true;

      js.onerror = () => {
        console.error('Failed to load Google SDK script.');
      };

      document.head.appendChild(js);
    }
  }

  /**
   * Attach the click handler to the login button.
   */
  private attachLoginHandler(): void {
    if (this.auth2 && this.loginElement) {
      this.auth2.attachClickHandler(
        this.loginElement.nativeElement,
        {},
        (googleUser: any) => {
          const profile = googleUser.getBasicProfile();
          console.log('Token: ', googleUser.getAuthResponse().id_token);
          console.log('Name: ', profile.getName());
          console.log('Email: ', profile.getEmail());
          console.log('Image URL: ', profile.getImageUrl());

          // You can now send the ID token to your backend for verification.
        },
        (error: any) => {
          console.error('Error during Google login:', error);
          alert('Failed to login with Google. Please try again.');
        }
      );
    } else {
      console.error('Google Auth2 is not initialized or login button is missing.');
    }
  }
}
