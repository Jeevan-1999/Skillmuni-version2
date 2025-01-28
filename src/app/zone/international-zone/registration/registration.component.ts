import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userName = 'John Doe';
  email = 'johndoe@example.com';
  phone = '123-456-7890';
  selectedInquiry = ''; // Bind this to track the selected option
  isFormSubmitted = false; // Track form submission state

  submitForm() {
    // Simulate form submission
    console.log('Form submitted');
    this.isFormSubmitted = true; // Show success screen
  }
}
