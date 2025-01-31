import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-learning-category-detail',
  templateUrl: './learning-category-detail.component.html',
  styleUrls: ['./learning-category-detail.component.css']
})
export class LearningCategoryDetailComponent implements OnInit {
  categoryTitle: string = '';
  categoryContent: { description: string; image: string } = { description: '', image: '' };

  categories: Record<string, { description: string; image: string }> = {
    'GLOBAL GYAN': {
      description: 'Explore global knowledge and expand your understanding of the world.',
      image: 'assets/details/global-gyan-detail.png'
    },
    'WHAT’S THE GOOD WORD': {
      description: 'Test your vocabulary and learn new words every day.',
      image: 'assets/details/good-word-detail.png'
    },
    'YOUR WISHLIST': {
      description: 'Track and manage your learning goals with ease.',
      image: 'assets/details/wishlist-detail.png'
    },
    'NATION WANTS TO KNOW': {
      description: 'Stay updated with the latest national news and insights.',
      image: 'assets/details/nation-knows-detail.png'
    },
    'BRAIN VITA': {
      description: 'Solve challenging puzzles and enhance your problem-solving skills.',
      image: 'assets/details/brain-vita-detail.png'
    },
    'ENGLISH VINGLISH': {
      description: 'Improve your English skills through interactive lessons.',
      image: 'assets/details/english-vinglish-detail.png'
    },
    'SHARP SHOOTER': {
      description: 'Sharpen your focus and test your aiming skills.',
      image: 'assets/details/sharp-shooter-detail.png'
    },
    'IT’S MY STYLE': {
      description: 'Express yourself and develop your own unique style.',
      image: 'assets/details/its-my-style-detail.png'
    },
    'HAPPINESS BAROMETER': {
      description: 'Measure your happiness and learn how to improve it.',
      image: 'assets/details/happiness-barometer-detail.png'
    },
    'SURGICAL STRIKE': {
      description: 'Test your strategic thinking and problem-solving skills.',
      image: 'assets/details/surgical-strike-detail.png'
    }
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryTitle = this.route.snapshot.paramMap.get('title') || 'Unknown';

    // Ensure the key exists in the categories object
    if (this.categoryTitle in this.categories) {
      this.categoryContent = this.categories[this.categoryTitle];
    } else {
      this.categoryContent = { description: 'Content not found', image: 'assets/details/default.png' };
    }
  }
}
