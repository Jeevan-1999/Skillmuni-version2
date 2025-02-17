import { Component } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent {
  questions = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur. Trincidunt ultrices augue sagittis amet sapien elit.',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      selectedOption: ''
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur. Trincidunt ultrices augue sagittis amet sapien elit.',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      selectedOption: ''
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur. Trincidunt ultrices augue sagittis amet sapien elit.',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      selectedOption: ''
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur. Trincidunt ultrices augue sagittis amet sapien elit.',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      selectedOption: ''
    }
  ];

  submitAnswers() {
    console.log('User answers:', this.questions);
  }
}
