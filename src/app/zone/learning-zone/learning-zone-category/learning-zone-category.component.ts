import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZoneService } from 'src/app/services/zone.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-learning-zone-category',
  templateUrl: './learning-zone-category.component.html',
  styleUrls: ['./learning-zone-category.component.css']
})
export class LearningZoneCategoryComponent implements OnInit {
  title: string | null = null;
  id_academic_tile: string | null = null;
  learnAndPlayCards: any[] = [];
  externalUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private zoneService: ZoneService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.id_academic_tile = this.route.snapshot.paramMap.get('id');
    this.title = decodeURIComponent(this.route.snapshot.paramMap.get('title') || '');
    const url = this.route.snapshot.queryParamMap.get('url');

    if (url) {
      // window.location.href = url; //The issue is related to Content Security Policy (CSP), which would not open external site directly in app.
      window.open(url, '_blank');
      this.externalUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

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
