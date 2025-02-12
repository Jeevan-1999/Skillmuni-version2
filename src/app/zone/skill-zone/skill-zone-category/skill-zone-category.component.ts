import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-skill-zone-category',
  templateUrl: './skill-zone-category.component.html',
  styleUrls: ['./skill-zone-category.component.css']
})
export class SkillZoneCategoryComponent implements OnInit {
  title: string | null = null;
  id_academic_tile: string | null = null;
  learnAndPlayCards: any[] = [];

  constructor(private route: ActivatedRoute, private zoneService: ZoneService) { }

  ngOnInit(): void {
    this.id_academic_tile = this.route.snapshot.paramMap.get('id');
    this.title = decodeURIComponent(this.route.snapshot.paramMap.get('title') || '');

    if (this.id_academic_tile) {
      this.fetchBriefTiles(this.id_academic_tile);
    }
  }


  fetchBriefTiles(id_academic_tile: string) {
    this.zoneService.getBriefTiles(id_academic_tile).subscribe(
      (data: any[]) => {
        this.learnAndPlayCards = data.map(item => ({
          title: item.category_tile,
          image: item.tile_image,
          solved: '0/51', // Placeholder, modify if needed
          goals: '0'
        }));
      },
      error => {
        console.error('Error fetching brief tiles:', error);
      }
    );
  }
}
