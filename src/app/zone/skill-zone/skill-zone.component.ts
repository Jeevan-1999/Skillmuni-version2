import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZoneService } from 'src/app/services/zone.service';


@Component({
  selector: 'app-skill-zone',
  templateUrl: './skill-zone.component.html',
  styleUrls: ['./skill-zone.component.css']
})
export class SkillZoneComponent implements OnInit {
  skillZoneCards: any[] = [];

  constructor(
    private router: Router,
    private zoneService: ZoneService
  ) { }

  ngOnInit(): void {
    this.skillZoneCards = this.zoneService.getSkillZoneCards();
  }

  navigateToCategory(title: string) {
    this.router.navigate(['/skill-zone-category', title]);
  }
}
