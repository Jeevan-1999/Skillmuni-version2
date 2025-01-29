import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-international-zone',
  templateUrl: './international-zone.component.html',
  styleUrls: ['./international-zone.component.css']
})
export class InternationalZoneComponent implements OnInit {
  places: any[] = [];


  constructor(private router: Router, private zoneService: ZoneService) { }

  ngOnInit(): void {
    this.places = this.zoneService.getPlaces();

  }

}
