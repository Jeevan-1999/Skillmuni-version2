import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-zone-details',
  templateUrl: './zone-details.component.html',
  styleUrls: ['./zone-details.component.css'],
})
export class ZoneDetailsComponent implements OnInit {
  @Input() tileCode: string = '';
  @Input() placeName: string = '';
  articles: any[] = [];
  @Output() backClicked = new EventEmitter<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private zoneService: ZoneService
  ) { }

  ngOnInit(): void {
    if (!this.tileCode) {
      this.tileCode = this.route.snapshot.paramMap.get('placeName') || '';
    }

    if (this.tileCode) {
      this.zoneService.getPlaces().subscribe((response) => {
        if (response.Status === 'SUCCESS' && response.Tile) {
          const selectedPlace = response.Tile.find((tile: any) => tile.tile_code === this.tileCode);
          if (selectedPlace) {
            this.placeName = selectedPlace.category_tile; // Set placeName dynamically
          }
        }
      });

      this.zoneService.getBriefListForStudyAbroad(this.tileCode).subscribe(
        (response) => {
          if (response.BriefList) {
            this.articles = response.BriefList.map((item: any) => ({
              articleTitle: item.brief_title,
              articleContent: item.briefResource.find((res: any) => res.resource_type === 1)?.resouce_data || 'No content available',
              articleImage: `https://www.skillmuni.in/sulcmsproduction${item.briefResource.find((res: any) => res.resource_type === 2)?.brief_destination}${item.briefResource.find((res: any) => res.resource_type === 2)?.resouce_data}`,
            }));
          }
        },
        (error) => {
          console.error('Error fetching brief list:', error);
        }
      );
    }
  }

  navigateToRegister(): void {
    this.router.navigate(['international-zone/article/register']);
  }

  // This is where the back button click triggers the parent method
  onBackClick() {
    this.backClicked.emit();  // Emit the event to hide zone details and show international zone
  }
}
