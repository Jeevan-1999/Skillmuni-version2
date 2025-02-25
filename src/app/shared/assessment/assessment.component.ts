import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZoneService } from 'src/app/services/zone.service';
import { Location } from '@angular/common';
import { QuestionItem, AnswerOption } from 'src/app/models/assessment.model';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  // Use the interface type instead of any
  questions: QuestionItem[] = [];
  briefCode: string = '';
  previousArticles: any[] = []; // Store previous articles
  submitted: boolean = false;
  score: number = 0;

  constructor(private route: ActivatedRoute, private zoneService: ZoneService, private location: Location) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.briefCode = params['brfcode'];
      this.title = params['title'] || 'Assessment';
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
          this.questions = data.briefDatals.QTNLIST.map((item: any): QuestionItem => ({
            text: item.question.brief_question,
            options: item.answers.map((ans: any): AnswerOption => ({
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
    this.location.back();
  }

  submitAnswers() {
    this.submitted = true;
    this.score = 0;
    // Now TypeScript knows that each option is an AnswerOption, so 'opt' is inferred correctly.
    this.questions.forEach(question => {
      const selectedOption = question.options.find(opt => opt.text === question.selectedOption);
      if (selectedOption) {
        question.answerStatus = selectedOption.isCorrect === 1 ? 'correct' : 'wrong';
        if (selectedOption.isCorrect === 1) {
          this.score++;
        }
      } else {
        question.answerStatus = 'unanswered';
      }
    });
    console.log('User answers:', this.questions);
    console.log('Score:', this.score);
  }
}
