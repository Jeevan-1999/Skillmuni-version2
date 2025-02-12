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

  constructor(private router: Router, private zoneService: ZoneService) { }

  ngOnInit(): void {
    this.fetchSkillZoneCards();
  }

  fetchSkillZoneCards() {
    this.zoneService.getSkillZoneCards().subscribe(
      (data: any[]) => {
        this.skillZoneCards = data
          .filter(item => item.status === "A") // Only active items
          .map(item => ({
            id_academic_tile: item.id_academic_tile,
            title: item.tile_name,
            image: item.tile_image,
            solved: '0/0',
            goals: '0'
          }));
      },
      error => {
        console.error('Error fetching skill zone cards:', error);
      }
    );
  }

  navigateToCategory(card: any) {
    this.router.navigate(['/skill-zone-category', card.id_academic_tile, encodeURIComponent(card.title)]);
  }
}
