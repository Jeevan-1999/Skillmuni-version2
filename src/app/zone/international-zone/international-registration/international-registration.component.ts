import { Component } from '@angular/core';

@Component({
  selector: 'app-international-registration',
  templateUrl: './international-registration.component.html',
  styleUrls: ['./international-registration.component.css']
})
export class InternationalRegistrationComponent {

  userName = 'Jeevan';
  email = 'jeevan@tgc.com';
  phone = '123-456-7890';
  selectedInquiry = ''; // Bind this to track the selected option
  isFormSubmitted = false; // Track form submission state

  submitForm() {
    // Simulate form submission
    console.log('Form submitted');
    this.isFormSubmitted = true; // Show success screen
  }
}
