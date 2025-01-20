import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LearnAndPlayService } from 'src/app/services/learn-and-play.service';

// Define an interface for the learnAndPlayCard
interface LearnAndPlayCard {
  title: string;
  image: string;
  solved: string;
  goals: string;
}

@Component({
  selector: 'app-skill-zone',
  templateUrl: './skill-zone.component.html',
  styleUrls: ['./skill-zone.component.css']
})
export class SkillZoneComponent implements OnInit {
  learnAndPlayCards: LearnAndPlayCard[] = [];  // Specify the type here

  constructor(
    private router: Router,
    private learnAndPlayService: LearnAndPlayService
  ) { }

  ngOnInit(): void {
    this.learnAndPlayCards = this.learnAndPlayService.getLearnAndPlayCards();
  }

  navigateToCategory(title: string) {
    this.router.navigate(['/skill-zone-category', title]);
  }
}
