import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardDataService } from '../services/dashboard-data.service';

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
}
