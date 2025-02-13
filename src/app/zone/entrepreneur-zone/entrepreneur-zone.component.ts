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
  showComingSoon: boolean = false;  // Control the visibility of app-coming-soon


  comingSoonData = {
    zoneTitle: 'Entrepreneur Zone',
    subtitle: 'ASSESSMENT',
    cardTitle: 'Something Exciting Coming Your Way!',
    imageUrl: 'assets/cards/entrepreneurial-quotient.jpg',
    description: 'Get ready to explore your entrepreneurial strengths and uncover the skills that set you apart. This assessment is designed to guide you on your journey to success. Coming soon!'
  };

  constructor(private router: Router, private zoneService: ZoneService) { }

  ngOnInit(): void {
    this.opportunityCards = this.zoneService.getOpportunities();
  }

  navigateToEntrepreneurialQuotient() {
    this.showComingSoon = true;  // Show the coming-soon component
  }

  navigateToOpportunity(title: string) {
    this.router.navigate(['/entrepreneur-zone/opportunity', title]);
  }
}
