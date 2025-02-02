import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZoneService } from 'src/app/services/zone.service';  // Import the ZoneService

@Component({
  selector: 'app-learning-zone',
  templateUrl: './learning-zone.component.html',
  styleUrls: ['./learning-zone.component.css']
})
export class LearningZoneComponent implements OnInit {


  learningZoneCards: any[] = [];
  knowledgeHubCards: any[] = [];

  constructor(private router: Router, private zoneService: ZoneService) { }

  ngOnInit(): void {
    this.learningZoneCards = this.zoneService.getlearningZoneCards();
    this.knowledgeHubCards = this.zoneService.getknowledgeHubCards();
  }

  navigateToDetail(cardTitle: string) {
    this.router.navigate(['/learning-category-detail', cardTitle]);
  }
}
