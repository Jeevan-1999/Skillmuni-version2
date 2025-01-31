import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardDataService } from '../services/dashboard-data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  Name: string = 'Saakshi'; // Replace with dynamic data if needed
  zones: any[] = [];
  learningZoneCards: any[] = [];
  skillZoneCards: any[] = [];
  auth = inject(AuthService)
  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;
  constructor(
    private router: Router,
    private dashboardDataService: DashboardDataService
  ) { }

  ngOnInit(): void {
    // Fetch data from the service
    this.zones = this.dashboardDataService.getZones();
    this.learningZoneCards = this.dashboardDataService.getLearningZoneCards();
    this.skillZoneCards = this.dashboardDataService.getSkillZoneCards();
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
