import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  zones = [
    { name: 'International Zone', description: 'Compare countries, find top institutes, and register your interest – we’ll guide you all the way!', img: 'assets/zones/International zone.png' },
    { name: 'Entrepreneur Zone', description: 'Test your Entrepreneurial Quotient, share ideas, find collaborators, and explore new paths!', img: 'assets/zones/Entrepreneur zone.png' },
    { name: 'Placement Zone', description: 'Take assessments to match jobs with your skills and needs. Opportunities are waiting!', img: 'assets/zones/Placement zone.png' }
  ];

  Name: string = 'Saakshi'; // Replace with dynamic data if needed

  // Cards for the Learning Zone
  learningZoneCards = [
    { title: 'BRAIN VITA', image: 'assets/cards/brain-vita.png' },
    { title: 'ENGLISH VINGLISH', image: 'assets/cards/english-vinglish.png' },
    { title: 'SHARP SHOOTER', image: 'assets/cards/sharp-shooter.png' },
    { title: 'QUIZ MASTER', image: 'assets/cards/quiz-master.png' },
    { title: 'LOGIC PUZZLES', image: 'assets/cards/logic-puzzles.png' },
    { title: 'WORD BUILDER', image: 'assets/cards/word-builder.png' },
  ];

  // Cards for the Skill Zone
  skillZoneCards = [
    { title: 'INSURANCE', image: 'assets/cards/insurance.png' },
    { title: 'BANKING', image: 'assets/cards/banking.png' },
    { title: 'HOSPITALITY', image: 'assets/cards/hospitality.png' },
    { title: 'RETAIL', image: 'assets/cards/retail.png' },
    { title: 'IT SKILLS', image: 'assets/cards/it-skills.png' },
    { title: 'COMMUNICATION', image: 'assets/cards/communication.png' },
  ];
}
