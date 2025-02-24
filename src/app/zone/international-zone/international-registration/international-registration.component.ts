import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-international-registration',
  templateUrl: './international-registration.component.html',
  styleUrls: ['./international-registration.component.css']
})
export class InternationalRegistrationComponent {
  userProfileImg = JSON.parse(localStorage.getItem('loggedInUser')!).picture;
  userName = JSON.parse(localStorage.getItem('loggedInUser')!).name;
  email = JSON.parse(localStorage.getItem('loggedInUser')!).email;
  phone = '123-456-7890';
  selectedInquiry = ''; // Bind this to track the selected option
  isFormSubmitted = false; // Track form submission state

  constructor(private location: Location,) { }

  submitForm() {
    // Simulate form submission
    console.log('Form submitted');
    this.isFormSubmitted = true; // Show success screen
  }

  onBackClick() {
    this.location.back();
  }
}
