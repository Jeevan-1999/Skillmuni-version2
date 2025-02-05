import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {
  private apiUrl = 'https://www.skillmuni.in/sulapiproduction/api/user/add';

  constructor(private router: Router, private ngZone: NgZone, private http: HttpClient) { }

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
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }

  handleLogin(response: any): void {
    console.log("handleLogin triggered:", response);

    if (response) {
      const payload = this.decodeToken(response.credential);
      if (!payload) {
        console.error("Failed to decode Google token");
        return;
      }

      sessionStorage.setItem("loggedInUser", JSON.stringify(payload));
      console.log("Google Login Payload:", payload);

      // Prepare user data for backend with null defaults for missing fields
      const userData = {
        ID_CODE: null,
        ID_ORGANIZATION: 130,
        ID_ROLE: 103,
        USERID: payload.email || null, // Using email as USERID
        PASSWORD: null,
        FBSOCIALID: null,
        GPSOCIALID: payload.sub || null,
        STATUS: 'A',
        EXPIRY_DATE: null,
        EMPLOYEEID: null,
        user_department: null,
        user_designation: null,
        user_function: null,
        user_grade: null,
        user_status: null,
        reporting_manager: null,
        is_reporting: null,
        ref_id: null,
        FIRSTNAME: payload.given_name || null,
        LASTNAME: payload.family_name || null,
        AGE: null,
        LOCATION: null,
        EMAIL: payload.email || null,
        MOBILE: null,
        GENDER: null,
        DESIGNATION: null,
        CITY: null,
        OFFICE_ADDRESS: null,
        DATE_OF_BIRTH: null,
        DATE_OF_JOINING: null,
        REPORTING_MANAGER: null,
        PROFILE_IMAGE: payload.picture || null,
        COLLEGE: null,
        GRADUATIONYEAR: null,
        STATE: null,
        ResumeFlag: null,
        ResumeLocation: null,
        id_degree: null,
        id_stream: null,
        COUNTRY: null,
        STUDENT: null,
        NOTSTUDENT: null,
        OTHERSTREAM: null,
        id_foundation: null,
        clg_city: null,
        clg_state: null,
        clg_country: null,
        social_dp_flag: null
      };

      console.log("User Data to be Stored:", userData);

      // Send data to backend
      this.storeUserData(userData);

      this.ngZone.run(() => {
        this.router.navigate(['/home']).then(() => window.location.reload());
      });
    }
  }

  private storeUserData(user: any): void {
    console.log("Sending user data to backend:", user);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    this.http.post(this.apiUrl, user, { headers }).subscribe({
      next: (response) => console.log("User data stored successfully:", response),
      error: (error) => {
        console.error("Error storing user data:", error);
        if (error.status === 0) {
          console.error("Possible CORS issue or network error.");
        } else if (error.status === 404) {
          console.error("API Not Found: Check API route in ASP.NET.");
        } else if (error.status === 400) {
          console.error("Bad Request: Check if all required fields are sent.");
        } else if (error.status === 500) {
          console.error("Internal Server Error: Check ASP.NET logs.");
        } else {
          console.error("Backend response:", error.message);
        }
      }
    });
  }
}
