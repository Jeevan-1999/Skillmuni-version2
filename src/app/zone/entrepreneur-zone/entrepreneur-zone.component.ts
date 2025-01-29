import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-entrepreneur-zone',
  templateUrl: './entrepreneur-zone.component.html',
  styleUrls: ['./entrepreneur-zone.component.css'],
})
export class EntrepreneurZoneComponent implements OnInit {
  opportunityCards: any[] = [];

  constructor(private router: Router, private zoneService: ZoneService) { }

  ngOnInit(): void {
    this.opportunityCards = this.zoneService.getOpportunities();
  }

  navigateToEntrepreneurialQuotient() {
    this.router.navigate(['entrepreneur-zone/entrepreneurial-quotient']);
  }

  navigateToOpportunity(title: string) {
    this.router.navigate(['/entrepreneur-zone/opportunity', title]);
  }
}
