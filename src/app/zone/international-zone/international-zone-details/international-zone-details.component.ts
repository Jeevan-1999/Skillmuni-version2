import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-international-zone-details',
  templateUrl: './international-zone-details.component.html',
  styleUrls: ['./international-zone-details.component.css'],
})
export class InternationalZoneDetailsComponent implements OnInit {
  placeName: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.placeName = this.route.snapshot.paramMap.get('placeName') || '';
    const sanitizedPlaceName = this.placeName.toLowerCase().replace(/\s+/g, '-'); // Replace spaces with hyphens
    console.log('Place Name:', this.placeName);
    console.log('Image Path:', `assets/international/${sanitizedPlaceName}.png`);
  }

  get imagePath(): string {
    return `assets/international/${this.placeName.toLowerCase().replace(/\s+/g, '-')}.png`;
  }


}
