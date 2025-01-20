import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LearnAndPlayService {
  private learnAndPlayCards = [
    {
      title: 'INSURANCE', image: 'assets/cards/insurance.png', solved: '1/106', goals: '3',
      categories: [
        { categorytitle: 'VERBAL REASONING', categoryImage: 'assets/cards/verbal-reasoning.png', solved: '1/51', goals: '3' },
        { categorytitle: 'NON VERBAL REASONING', categoryImage: 'assets/cards/non-verbal-reasoning.png', solved: '1/51', goals: '3' },
        { categorytitle: 'ARITHMETICAL ABILITY', categoryImage: 'assets/cards/arithmetic.png', solved: '1/51', goals: '3' },
        { categorytitle: 'DATA INTERPRETATION', categoryImage: 'assets/cards/data-interpretation.png', solved: '1/51', goals: '3' },
      ],
    },
    {
      title: 'BANKING', image: 'assets/cards/banking.png', solved: '1/106', goals: '3',
      categories: [
        { categorytitle: 'VERBAL REASONING', categoryImage: 'assets/cards/verbal-reasoning.png', solved: '1/51', goals: '3' },
        { categorytitle: 'NON VERBAL REASONING', categoryImage: 'assets/cards/non-verbal-reasoning.png', solved: '1/51', goals: '3' },
        { categorytitle: 'ARITHMETICAL ABILITY', categoryImage: 'assets/cards/arithmetic.png', solved: '1/51', goals: '3' },
        { categorytitle: 'DATA INTERPRETATION', categoryImage: 'assets/cards/data-interpretation.png', solved: '1/51', goals: '3' },
      ],
    },
    {
      title: 'HOSPITALITY', image: 'assets/cards/hospitality.png', solved: '1/106', goals: '3',
      categories: [
        { categorytitle: 'VERBAL REASONING', categoryImage: 'assets/cards/verbal-reasoning.png', solved: '1/51', goals: '3' },
        { categorytitle: 'NON VERBAL REASONING', categoryImage: 'assets/cards/non-verbal-reasoning.png', solved: '1/51', goals: '3' },
        { categorytitle: 'ARITHMETICAL ABILITY', categoryImage: 'assets/cards/arithmetic.png', solved: '1/51', goals: '3' },
        { categorytitle: 'DATA INTERPRETATION', categoryImage: 'assets/cards/data-interpretation.png', solved: '1/51', goals: '3' },
      ],
    },
    {
      title: 'IT GYAN', image: 'assets/cards/it-gyan.png', solved: '1/106', goals: '3',
      categories: [
        { categorytitle: 'VERBAL REASONING', categoryImage: 'assets/cards/verbal-reasoning.png', solved: '1/51', goals: '3' },
        { categorytitle: 'NON VERBAL REASONING', categoryImage: 'assets/cards/non-verbal-reasoning.png', solved: '1/51', goals: '3' },
        { categorytitle: 'ARITHMETICAL ABILITY', categoryImage: 'assets/cards/arithmetic.png', solved: '1/51', goals: '3' },
        { categorytitle: 'DATA INTERPRETATION', categoryImage: 'assets/cards/data-interpretation.png', solved: '1/51', goals: '3' },
      ],
    },
  ];

  constructor() { }

  getLearnAndPlayCards() {
    return this.learnAndPlayCards;
  }
}
