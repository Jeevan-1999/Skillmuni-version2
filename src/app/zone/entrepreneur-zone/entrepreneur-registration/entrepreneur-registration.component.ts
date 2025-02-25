import { Component } from '@angular/core';

@Component({
  selector: 'app-entrepreneur-registration',
  templateUrl: './entrepreneur-registration.component.html',
  styleUrls: ['./entrepreneur-registration.component.css']
})
export class EntrepreneurRegistrationComponent {
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
