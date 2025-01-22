import { Component } from '@angular/core';

@Component({
  selector: 'app-international-zone',
  templateUrl: './international-zone.component.html',
  styleUrls: ['./international-zone.component.css']
})
export class InternationalZoneComponent {
  places = [
    { name: 'Eastern Europe', image: 'assets/international/eastern-europe.png' },
    { name: 'United Kingdom', image: 'assets/international/united-kingdom.png' },
    { name: 'Canada', image: 'assets/international/canada.png' },
    { name: 'New Zealand', image: 'assets/international/new-zealand.png' },
    { name: 'USA', image: 'assets/international/usa.png' },
    { name: 'Singapore', image: 'assets/international/singapore.png' },
    { name: 'Ireland', image: 'assets/international/ireland.png' },
    { name: 'Australia', image: 'assets/international/australia.png' },
    { name: 'Germany', image: 'assets/international/germany.png' },
    { name: 'Dubai', image: 'assets/international/dubai.png' },
    { name: 'France', image: 'assets/international/france.png' },
    { name: 'Lithuania', image: 'assets/international/lithuania.png' }
  ];
}
