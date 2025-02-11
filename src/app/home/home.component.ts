import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ZoneService } from '../services/zone.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Name: string = 'Saakshi'; // Replace with dynamic data if needed
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
    // Fetch data from the service
    this.zones = this.zoneService.getZones();
    this.learningZoneCards = this.zoneService.getlearningZoneCards();
    this.skillZoneCards = this.zoneService.getSkillZoneCards();
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

  navigateToSkillDetail(cardTitle: string) {
    this.router.navigate(['/skill-zone-category', cardTitle]);
  }
}