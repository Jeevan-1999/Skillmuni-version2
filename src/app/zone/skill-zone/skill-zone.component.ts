import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-zone',
  templateUrl: './skill-zone.component.html',
  styleUrls: ['./skill-zone.component.css']
})
export class SkillZoneComponent {
  learnAndPlayCards = [
    { title: 'INSURANCE', image: 'assets/cards/insurance.png', solved: '1/106', goals: '3' },
    { title: 'BANKING', image: 'assets/cards/banking.png', solved: '1/106', goals: '3' },
    { title: 'HOSPITALITY', image: 'assets/cards/hospitality.png', solved: '1/106', goals: '3' },
    { title: 'IT GYAN', image: 'assets/cards/it-gyan.png', solved: '1/106', goals: '3' },
  ];
}
