declare var google: any;
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private router = inject(Router)
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '572766942851-mgjc033rh59hgjp604u5mjidf4kok555.apps.googleusercontent.com',
      callback: (resp: any) => this.handleLogin(resp)
    });

    setTimeout(() => { // Ensure element exists before rendering
      const googleBtn = document.getElementById("google-btn");
      if (googleBtn) {
        google.accounts.id.renderButton(googleBtn, {
          text: 'continue_with',
          theme: 'outline',
          size: 'large',
          shape: 'circle',
          width: "300"
        });
      }
    }, 0);
  }


  private decodeToken(token: string) {
    return JSON.parse(atob(token.split(".")[1]))
  }
  handleLogin(response: any) {
    if (response) {
      const payLoad = this.decodeToken(response.credential);
      sessionStorage.setItem("loggedInUser", JSON.stringify(payLoad));
      console.log(payLoad);

      console.log('Navigating to dashboard...'); // Add this line
      this.router.navigate(['dashboard']);
    }
  }



}
