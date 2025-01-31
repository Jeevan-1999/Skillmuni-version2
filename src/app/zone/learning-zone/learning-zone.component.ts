import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learning-zone',
  templateUrl: './learning-zone.component.html',
  styleUrls: ['./learning-zone.component.css']
})
export class LearningZoneComponent {
  knowledgeHubCards = [
    { title: 'GLOBAL GYAN', image: 'assets/cards/global-gyan.png' },
    { title: 'WHAT’S THE GOOD WORD', image: 'assets/cards/good-word.png' },
    { title: 'YOUR WISHLIST', image: 'assets/cards/your-wishlist.png' },
    { title: 'NATION WANTS TO KNOW', image: 'assets/cards/nation-knows.png' },
  ];

  learnAndPlayCards = [
    { title: 'BRAIN VITA', image: 'assets/cards/brain-vita.png', solved: '1/106', goals: '3' },
    { title: 'ENGLISH VINGLISH', image: 'assets/cards/english-vinglish.png', solved: '1/106', goals: '3' },
    { title: 'SHARP SHOOTER', image: 'assets/cards/sharp-shooter.png', solved: '1/106', goals: '3' },
    { title: 'IT’S MY STYLE', image: 'assets/cards/its-my-style.png', solved: '1/106', goals: '3' },
    { title: 'HAPPINESS BAROMETER', image: 'assets/cards/happiness-barometer.png', solved: '1/106', goals: '3' },
    { title: 'SURGICAL STRIKE', image: 'assets/cards/surgical-strike.png', solved: '1/106', goals: '3' },
  ];

  constructor(private router: Router) { }

  navigateToDetail(cardTitle: string) {
    this.router.navigate(['/learning-category-detail', cardTitle]);
  }
}
