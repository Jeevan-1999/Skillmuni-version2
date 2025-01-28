import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-international-zone-details',
  templateUrl: './international-zone-details.component.html',
  styleUrls: ['./international-zone-details.component.css'],
})
export class InternationalZoneDetailsComponent implements OnInit {
  placeName: string = '';
  articles: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private zoneService: ZoneService
  ) { }

  ngOnInit(): void {
    this.placeName = this.route.snapshot.paramMap.get('placeName') || '';
    const places = this.zoneService.getPlaces();
    const selectedPlace = places.find(
      (place) => place.name.toLowerCase() === this.placeName.toLowerCase()
    );

    if (selectedPlace) {
      this.articles = selectedPlace.articles;
    }
  }

  navigateToRegister(): void {
    this.router.navigate(['register']);
  }
}
