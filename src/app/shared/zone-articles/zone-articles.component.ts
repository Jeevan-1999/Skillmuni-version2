import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zone-articles',
  templateUrl: './zone-articles.component.html',
  styleUrls: ['./zone-articles.component.css']
})
export class ZoneArticlesComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() articles: any[] = [];
  @Output() backClicked = new EventEmitter<void>(); // Back button event

  constructor(private router: Router) { }

  onBackClick() {
    this.backClicked.emit();  // Emit event to parent when back is clicked
  }

  navigateToTest() {
    this.router.navigate(['/assessment']);
  }


  assessmentQuestions = [
    {
      text: 'What is Angular?',
      options: ['Framework', 'Library', 'Language', 'Tool'],
      selectedOption: ''
    },
    {
      text: 'Which is used for styling?',
      options: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      selectedOption: ''
    }
  ];

  onAssessmentSubmit(answers: any[]) {
    console.log('User Submitted Answers:', answers);
  }
}
