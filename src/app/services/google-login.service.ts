import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {
  constructor(private router: Router, private ngZone: NgZone) { }

  initializeGoogleLogin(callback: (response: any) => void): Promise<void> {
    return this.loadGoogleScript().then(() => {
      google.accounts.id.initialize({
        client_id: '572766942851-mgjc033rh59hgjp604u5mjidf4kok555.apps.googleusercontent.com',
        callback: callback
      });

      this.renderGoogleButton();
    });
  }

  private renderGoogleButton(): void {
    setTimeout(() => {
      const googleBtn = document.getElementById("google-btn");
      if (googleBtn) {
        google.accounts.id.renderButton(googleBtn, {
          text: 'continue_with',
          theme: 'outline',
          size: 'large',
          shape: 'circle',
          width: "250"
        });
      }
    }, 100);
  }

  private loadGoogleScript(): Promise<void> {
    return new Promise((resolve) => {
      if (document.getElementById('google-js')) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.id = 'google-js';
      script.src = "https://accounts.google.com/gsi/client";
      script.onload = () => resolve();
      document.head.appendChild(script);
    });
  }

  decodeToken(token: string): any {
    return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(response: any): void {
    if (response) {
      const payload = this.decodeToken(response.credential);
      sessionStorage.setItem("loggedInUser", JSON.stringify(payload));
      console.log(payload);

      this.ngZone.run(() => {
        this.router.navigate(['/dashboard']).then(() => window.location.reload());
      });
    }
  }
}
