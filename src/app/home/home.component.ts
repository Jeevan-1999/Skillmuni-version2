import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ZoneService } from '../services/zone.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Name: string = 'Saakshi';
  zones: any[] = [];
  learningZoneCards: any[] = [];
  skillZoneCards: any[] = [];
  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;

  constructor(
    private router: Router,
    private zoneService: ZoneService
  ) { }

  ngOnInit(): void {
    this.zones = this.zoneService.getZones();
    this.fetchLearningZoneCards();
    this.fetchSkillZoneCards();
  }

  fetchLearningZoneCards() {
    this.zoneService.getLearningZoneCards().subscribe((data: any[]) => {
      this.learningZoneCards = data.map(item => ({
        title: item.tile_name,
        image: item.tile_image,
        solved: '0/0',
        goals: '0'
      }));
    },
      (error) => {
        console.error('Error fetching learning zone cards:', error);
      });
  }

  fetchSkillZoneCards() {
    this.zoneService.getSkillZoneCards().subscribe((data: any[]) => {
      this.skillZoneCards = data.map(item => ({
        id_academic_tile: item.id_academic_tile, // ✅ Add ID here
        title: item.tile_name,
        image: item.tile_image,
        solved: '0/0',
        goals: '0'
      }));
    },
      (error) => {
        console.error('Error fetching skill zone cards:', error);
      });
  }
  navigateToZone(zoneName: string): void {
    const selectedZone = this.zones.find((zone) => zone.name === zoneName);
    if (selectedZone) {
      this.router.navigate([selectedZone.route]);
    }
  }

  navigateToLearningDetail(cardTitle: string) {
    this.router.navigate(['/learning-category-detail', cardTitle]);
  }

  navigateToSkillDetail(card: any) {
    this.router.navigate(['/skill-zone-category', card.id_academic_tile, encodeURIComponent(card.title)]);
  }
}
