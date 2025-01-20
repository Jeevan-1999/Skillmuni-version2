import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skill-zone-category',
  templateUrl: './skill-zone-category.component.html',
  styleUrls: ['./skill-zone-category.component.css']
})
export class SkillZoneCategoryComponent implements OnInit {
  title: string | null = null;

  learnAndPlayCards = [
    { title: 'VERBAL REASONING', image: 'assets/cards/verbal-reasoning.png', solved: '1/106', goals: '3' },
    { title: 'NON VERBAL REASONING', image: 'assets/cards/non-verbal-reasoning.png', solved: '1/106', goals: '3' },
    { title: 'ARITHMETICAL ABILITY', image: 'assets/cards/arithmetic.png', solved: '1/106', goals: '3' },
    { title: 'DATA INTERPRETATION', image: 'assets/cards/data-interpretation.png', solved: '1/106', goals: '3' },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('title');
  }
}
