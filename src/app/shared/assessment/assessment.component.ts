import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  questions: any[] = [];
  briefCode: string = '';
  previousArticles: any[] = []; // Store previous articles
  @Output() backClicked = new EventEmitter<void>(); // Back button event

  constructor(private route: ActivatedRoute, private zoneService: ZoneService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.briefCode = params['brfcode'];
      this.title = params['title'] || 'Assessment'; // Use default if not provided
      this.subtitle = params['subtitle'] || '';

      if (this.briefCode) {
        this.fetchAssessment(this.briefCode);
      }
    });
  }

  fetchAssessment(briefCode: string) {
    this.zoneService.getAssessmentData(briefCode).subscribe(
      (data) => {
        console.log('Assessment API Response:', data);

        if (data.briefDatals?.QTNLIST) {
          this.questions = data.briefDatals.QTNLIST.map((item: any) => ({
            text: item.question.brief_question,
            options: item.answers.map((ans: any) => ({
              text: ans.brief_answer,
              isCorrect: ans.is_correct_answer
            })),
            selectedOption: ''
          }));
        }
      },
      (error) => {
        console.error('Error fetching assessment:', error);
      }
    );
  }

  onBackClick() {
    this.backClicked.emit(); // Emit event to return to app-zone-articles
  }

  submitAnswers() {
    console.log('User answers:', this.questions);
  }
}
