declare var google: any;
import { Component, inject, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  private ngZone = inject(NgZone);

  ngOnInit(): void {
    this.loadGoogleScript().then(() => {
      google.accounts.id.initialize({
        client_id: '572766942851-mgjc033rh59hgjp604u5mjidf4kok555.apps.googleusercontent.com',
        callback: (resp: any) => this.handleLogin(resp)
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

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(response: any) {
    if (response) {
      const payLoad = this.decodeToken(response.credential);
      sessionStorage.setItem("loggedInUser", JSON.stringify(payLoad));
      console.log(payLoad);

      console.log('Navigating to dashboard...');

      this.ngZone.run(() => {
        this.router.navigate(['/dashboard']).then(() => {
          window.location.reload();
        });
      });
    }
  }
}
