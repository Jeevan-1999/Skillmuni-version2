import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-international-zone-details',
  templateUrl: './international-zone-details.component.html',
  styleUrls: ['./international-zone-details.component.css'],
})
export class InternationalZoneDetailsComponent implements OnInit {
  tileCode: string = '';
  placeName: string = ''; // Add this line
  articles: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private zoneService: ZoneService
  ) { }

  ngOnInit(): void {
    this.tileCode = this.route.snapshot.paramMap.get('placeName') || '';

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
}
