import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-opportunity-detail',
  templateUrl: './opportunity-detail.component.html',
  styleUrls: ['./opportunity-detail.component.css']
})
export class OpportunityDetailComponent implements OnInit {
  opportunity: any; // Holds the selected opportunity

  constructor(private route: ActivatedRoute, private zoneService: ZoneService, private router: Router,) { }

  ngOnInit(): void {
    // Get title from the URL
    const title = this.route.snapshot.paramMap.get('title');

    // Find the matching opportunity
    this.opportunity = this.zoneService.getOpportunities().find(
      (opportunity) => opportunity.title === title
    );
  }

  navigateToRegister(): void {
    this.router.navigate(['entrepreneur-zone/article/register']);
  }
}
