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
  }

  // This method will be triggered when the back button is clicked in the zone-details component
  onBackClick() {
    this.showZoneDetails = false; // Hide zone details
    this.showInternationalZone = true; // Show international-zone-container
  }
}
