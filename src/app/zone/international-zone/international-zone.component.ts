import { Component } from '@angular/core';

@Component({
  selector: 'app-international-zone',
  templateUrl: './international-zone.component.html',
  styleUrls: ['./international-zone.component.css']
})
export class InternationalZoneComponent {
  places = [
    {
      name: 'Eastern Europe',
      image: 'assets/international/eastern-europe.png',
      articles: [
        {
          articleTitle: 'About Eastern Europe',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'Eastern Europe is a region that encompasses many different cultures, ethnicities, languages, and histories. Eastern Europe also offers an overall inexpensive international experience. Eastern universities have reached Western standards and quality. Thus, choosing a degree here could be one of the best decisions you can make!',
        },
        {
          articleTitle: 'Why Study in Eastern Europe?',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'Countries such as Russia, Ukraine & Belarus are exciting places to study abroad - rich in history, enlightening academically, and globalizing swiftly. There are many upcoming courses available. A big plus for Indian students is that a Russian degree is recognized worldwide. So Hey! Time to think out of the box; time to expand your horizons. There are many degrees available in English. Eastern Europe is a playground for international students - so go play. Soar high into your education!',
        },
        {
          articleTitle: 'Benefits of Studying in Eastern Europe',
          articleImage: 'assets/international/demo.png',
          articleContent:
            '1. These countries set a high value on university education and offer affordable tuition for international students (Starting INR 3,00,000). 2. You can choose to learn a foreign language as a part of your curriculum. 3. They are fascinating and historically influential places to offer Indian students a healthy mix of new and enriching experiences. 4. There are upcoming courses available and universities equipped with modern technology. Hence, learn from the best specialists and prosper as a globally demanded professional.',
        },
      ],
    },
    { name: 'United Kingdom', image: 'assets/international/united-kingdom.png', articles: [] },
    { name: 'Canada', image: 'assets/international/canada.png', articles: [] },
    { name: 'New Zealand', image: 'assets/international/new-zealand.png', articles: [] },
    { name: 'USA', image: 'assets/international/usa.png', articles: [] },
    { name: 'Singapore', image: 'assets/international/singapore.png', articles: [] },
    { name: 'Ireland', image: 'assets/international/ireland.png', articles: [] },
    { name: 'Australia', image: 'assets/international/australia.png', articles: [] },
    { name: 'Germany', image: 'assets/international/germany.png', articles: [] },
    { name: 'Dubai', image: 'assets/international/dubai.png', articles: [] },
    { name: 'France', image: 'assets/international/france.png', articles: [] },
    { name: 'Lithuania', image: 'assets/international/lithuania.png', articles: [] },
  ];

}
