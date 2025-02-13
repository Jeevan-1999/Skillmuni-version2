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
    this.fetchLearningZoneCards();
    // this.knowledgeHubCards = this.zoneService.getknowledgeHubCards();
  }

  fetchLearningZoneCards() {
    this.zoneService.getLearningZoneCards().subscribe((data: any[]) => {
      // Separate data based on theme_id
      this.knowledgeHubCards = data
        .filter(item => item.status === "A" && item.theme_id === 2) // For .card (theme_id = 2)
        .map(item => ({
          id_academic_tile: item.id_academic_tile,
          title: item.tile_name,
          image: item.tile_image,
          solved: '0/0',
          goals: '0'
        }));

      this.learningZoneCards = data
        .filter(item => item.status === "A" && item.theme_id === 1) // For .play-card (theme_id = 1)
        .map(item => ({
          id_academic_tile: item.id_academic_tile,
          title: item.tile_name,
          image: item.tile_image,
          solved: '0/0',
          goals: '0'
        }));
    },
      (error) => {
        console.error('Error fetching learning zone cards:', error);
      }
    );
  }


  navigateToDetail(card: any) {
    const specialCards = ["Global Gyan", "Whats the good word", "Nation wants to know"];

    if (specialCards.includes(card.title)) {
      this.zoneService.getLearningZoneCards().subscribe((data: any[]) => {
        const selectedCard = data.find(item => item.tile_name === card.title);
        if (selectedCard && selectedCard.url) {
          this.router.navigate(['/learning-zone-category', card.id_academic_tile, encodeURIComponent(card.title)], {
            queryParams: { url: selectedCard.url }
          });
        }
      });
    } else {
      this.router.navigate(['/learning-zone-category', card.id_academic_tile, encodeURIComponent(card.title)]);
    }
  }

}
