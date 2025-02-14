import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-international-zone',
  templateUrl: './international-zone.component.html',
  styleUrls: ['./international-zone.component.css'],
})
export class InternationalZoneComponent implements OnInit {
  places: any[] = [];
  selectedTileCode: string = '';
  selectedPlaceName: string = '';
  showZoneDetails: boolean = false; // To control visibility of zone details
  showInternationalZone: boolean = true; // To control visibility of international-zone-container
  zoneArticles: any[] = []; // To hold the articles fetched from the API
  zoneTitle: string = 'International Zone'; // Dynamic title for the zone
  zoneSubtitle: string = ''; // Dynamic subtitle for the zone

  constructor(private router: Router, private zoneService: ZoneService) { }

  ngOnInit(): void {
    this.zoneService.getPlaces().subscribe(
      (response) => {
        if (response.Status === 'SUCCESS' && response.Tile) {
          this.places = response.Tile.map((item: { category_tile: any; tile_image: any; tile_code: any }) => ({
            name: item.category_tile,
            image: item.tile_image,
            tileCode: item.tile_code, // Store tile_code for API call
          }));
        }
      },
      (error) => {
        console.error('Error fetching country data:', error);
      }
    );
  }

  navigateToPlace(place: { name: string; tileCode: string }) {
    this.selectedTileCode = place.tileCode;
    this.selectedPlaceName = place.name;
    this.showZoneDetails = true; // Show zone details
    this.showInternationalZone = false; // Hide international-zone-container

    // Fetch data for the selected zone (this could be dynamic)
    this.fetchZoneArticles(this.selectedTileCode);
    this.zoneSubtitle = place.name; // Set subtitle dynamically
  }

  fetchZoneArticles(tileCode: string) {
    this.zoneService.getBriefListwithAcademy(tileCode, '37').subscribe(
      (response) => {
        console.log('API Response:', response);

        // Check if response contains the BriefList array
        if (response && Array.isArray(response.BriefList)) {
          this.zoneArticles = response.BriefList.map((item: any) => ({
            articleTitle: item.brief_title,
            articleContent: item.briefResource.find((res: any) => res.resource_type === 1)?.resouce_data || 'No content available',
            articleImage: `https://www.skillmuni.in/sulcmsproduction${item.briefResource.find((res: any) => res.resource_type === 2)?.brief_destination}${item.briefResource.find((res: any) => res.resource_type === 2)?.resouce_data}`,
          }));
        } else {
          console.error('BriefList not found or not an array:', response);
        }
      },
      (error) => {
        console.error('Error fetching articles:', error);
      }
    );
  }


  onBackClick() {
    this.showZoneDetails = false; // Hide zone details
    this.showInternationalZone = true; // Show international-zone-container
  }
}
