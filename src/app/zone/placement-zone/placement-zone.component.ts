import { Component } from '@angular/core';

@Component({
  selector: 'app-placement-zone',
  templateUrl: './placement-zone.component.html',
  styleUrls: ['./placement-zone.component.css']
})
export class PlacementZoneComponent {
  jobCategories = [
    { name: 'Insurance', icon: 'assets/icons/insurance.png' },
    { name: 'ITES', icon: 'assets/icons/ites.png' },
    { name: 'Hospitality', icon: 'assets/icons/hospitality.png' },
    { name: 'Engineering', icon: 'assets/icons/engineering.png' },
    { name: 'Pharmaceutical', icon: 'assets/icons/pharmaceutical.png' },
    { name: 'NGO', icon: 'assets/icons/ngo.png' },
    { name: 'Game Development', icon: 'assets/icons/gamedev.png' },
    { name: 'Retail', icon: 'assets/icons/retail.png' },
    { name: 'Fashion Retail', icon: 'assets/icons/fashion.png' }
  ];
}
