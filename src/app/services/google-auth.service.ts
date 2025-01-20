import { Injectable } from '@angular/core';

declare const google: any; // Declare Google object globally

@Injectable({
  providedIn: 'root',
})
export class GoogleAuthService {
  private client: any; // Will hold the Google client instance

  constructor() {
    this.initializeGoogleAuth();
  }

  /**
   * Initialize Google OAuth Client
   */
  private initializeGoogleAuth(): void {
    // Ensure the script is fully loaded before initializing
    window.onload = () => {
      google.accounts.id.initialize({
        client_id: '1025254397639-59rjnkpjcf12itmj7p6evb587d5qsivc.apps.googleusercontent.com', // Replace with your Client ID
        callback: this.handleCredentialResponse.bind(this), // Handle the response
      });
    };
  }

  /**
   * Trigger Google Login
   */
  public signIn(): void {
    google.accounts.id.prompt(); // Shows the Google sign-in prompt
  }

  /**
   * Handle the Google response
   * @param response - The response returned by Google
   */
  private handleCredentialResponse(response: any): void {
    const token = response.credential; // JWT token from Google
    console.log('Google JWT Token:', token);

    // You can now send this token to your backend for verification.
    this.verifyTokenWithBackend(token);
  }

  /**
   * Example: Verify the Google token with your backend
   * @param token - The Google JWT token
   */
  private verifyTokenWithBackend(token: string): void {
    // Example placeholder for backend verification
    console.log('Send this token to your backend for verification:', token);
    // Use HTTP service to send the token to your backend API
  }
}
