import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  private learningZoneApiUrl = 'https://www.skillmuni.in/SkillmuniApi2022/api/GetAcademicTiles?UID=2509&OID=130';

  private skillZoneApiUrl = 'https://www.skillmuni.in/SkillmuniApi2022/api/GetSkillTiles?UID=2509&OID=130';

  constructor(private http: HttpClient) { }

  zones = [
    {
      name: 'International Zone',
      description:
        'Compare countries, find top institutes, and register your interest – we’ll guide you all the way!',
      img: 'assets/zones/International zone.png',
      route: 'international-zone',
    },
    {
      name: 'Entrepreneur Zone',
      description:
        'Test your Entrepreneurial Quotient, share ideas, find collaborators, and explore new paths!',
      img: 'assets/zones/Entrepreneur zone.png',
      route: 'entrepreneur-zone',
    },
    {
      name: 'Placement Zone',
      description:
        'Take assessments to match jobs with your skills and needs. Opportunities are waiting!',
      img: 'assets/zones/Placement zone.png',
      route: 'placement-zone',
    },
  ];

  knowledgeHubCards = [
    { title: 'GLOBAL GYAN', image: 'assets/cards/global-gyan.png' },
    { title: 'WHAT’S THE GOOD WORD', image: 'assets/cards/good-word.png' },
    { title: 'YOUR WISHLIST', image: 'assets/cards/your-wishlist.png' },
    { title: 'NATION WANTS TO KNOW', image: 'assets/cards/nation-knows.png' },
  ];


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
      ],
    },
    {
      name: 'United Kingdom',
      image: 'assets/international/united-kingdom.png',
      articles: [
        {
          articleTitle: 'About the United Kingdom',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'The United Kingdom is known for its prestigious universities, vibrant cultural history, and strong academic traditions. It offers a diverse and enriching experience for international students.',
        },
        {
          articleTitle: 'Why Study in the United Kingdom?',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'With globally recognized degrees, a multicultural environment, and access to cutting-edge research, the UK remains one of the most sought-after destinations for higher education.',
        },
      ],
    },
    {
      name: 'Canada',
      image: 'assets/international/canada.png',
      articles: [
        {
          articleTitle: 'About Canada',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'Canada is a land of cultural diversity, offering high-quality education, safe cities, and a welcoming environment for international students.',
        },
        {
          articleTitle: 'Why Study in Canada?',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'Canada is renowned for its research-intensive universities, excellent post-graduation work opportunities, and stunning natural landscapes.',
        },
      ],
    },
    {
      name: 'New Zealand',
      image: 'assets/international/new-zealand.png',
      articles: [
        {
          articleTitle: 'About New Zealand',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'New Zealand is a beautiful island country known for its excellent education system, safety, and breathtaking scenery.',
        },
        {
          articleTitle: 'Why Study in New Zealand?',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'New Zealand offers internationally recognized degrees, affordable tuition, and a welcoming culture for international students.',
        },
      ],
    },
    {
      name: 'USA',
      image: 'assets/international/usa.png',
      articles: [
        {
          articleTitle: 'About the USA',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'The United States is home to some of the world’s top universities and provides endless opportunities for academic and professional growth.',
        },
        {
          articleTitle: 'Why Study in the USA?',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'With its innovative education system, cultural diversity, and extensive resources, the USA is a prime destination for international students.',
        },
      ],
    },
    {
      name: 'Singapore',
      image: 'assets/international/singapore.png',
      articles: [
        {
          articleTitle: 'About Singapore',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'Singapore is a global hub of education and innovation, offering a multicultural environment and high-quality education institutions.',
        },
        {
          articleTitle: 'Why Study in Singapore?',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'Singapore is known for its world-class universities, strong economy, and excellent career prospects for international students.',
        },
      ],
    },
    {
      name: 'Ireland',
      image: 'assets/international/ireland.png',
      articles: [
        {
          articleTitle: 'About Ireland',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'Ireland is an English-speaking country with a rich cultural heritage and a strong reputation for academic excellence.',
        },
        {
          articleTitle: 'Why Study in Ireland?',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'Ireland offers a welcoming environment, globally recognized qualifications, and excellent career opportunities in diverse fields.',
        },
      ],
    },
    {
      name: 'Australia',
      image: 'assets/international/australia.png',
      articles: [
        {
          articleTitle: 'About Australia',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'Australia is a diverse and friendly country, famous for its top-ranked universities and unique cultural experiences.',
        },
        {
          articleTitle: 'Why Study in Australia?',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'Australia provides high-quality education, vibrant student life, and the chance to explore its beautiful landscapes and cities.',
        },
      ],
    },
    {
      name: 'Germany',
      image: 'assets/international/germany.png',
      articles: [
        {
          articleTitle: 'About Germany',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'Germany is known for its strong engineering programs, excellent universities, and vibrant cultural heritage.',
        },
        {
          articleTitle: 'Why Study in Germany?',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'Germany offers free or low-cost education, top-ranked universities, and abundant research opportunities for students.',
        },
      ],
    },
    {
      name: 'Dubai',
      image: 'assets/international/dubai.png',
      articles: [
        {
          articleTitle: 'About Dubai',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'Dubai is a modern and cosmopolitan city offering excellent education opportunities in a dynamic and international setting.',
        },
        {
          articleTitle: 'Why Study in Dubai?',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'Dubai provides high-quality education, cutting-edge facilities, and a gateway to global career opportunities.',
        },
      ],
    },
    {
      name: 'France',
      image: 'assets/international/france.png',
      articles: [
        {
          articleTitle: 'About France',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'France is renowned for its art, culture, and excellent academic institutions, offering an enriching experience for students.',
        },
        {
          articleTitle: 'Why Study in France?',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'France provides affordable tuition, globally recognized degrees, and an opportunity to experience its vibrant lifestyle.',
        },
      ],
    },
    {
      name: 'Lithuania',
      image: 'assets/international/lithuania.png',
      articles: [
        {
          articleTitle: 'About Lithuania',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'Lithuania is a small but vibrant country with a growing reputation for quality education and affordable living.',
        },
        {
          articleTitle: 'Why Study in Lithuania?',
          articleImage: 'assets/international/demo.png',
          articleContent:
            'Lithuania offers modern universities, affordable tuition fees, and the opportunity to explore a rich cultural heritage.',
        },
      ],
    },
  ];

  opportunityCards = [
    {
      title: 'Social Entrepreneur',
      description: 'Want to become a Social Entrepreneur?',
      image: 'assets/cards/social.png',
      articles: [
        {
          articleTitle: 'Masti - Ghar Ghar Mein Pathshala',
          articleImage: 'assets/cards/Pathshala.png',
          articleContent: 'Social entrepreneurship focuses on creating businesses that solve societal problems while maintaining financial sustainability.',
        }
      ]
    },
    {
      title: 'Gamification Consultant',
      description: 'Step Into Corporate Gamification Consulting!',
      image: 'assets/cards/gamification.png',
      articles: [
        {
          articleTitle: 'Afthonia Lab',
          articleImage: 'assets/cards/coroebus.png',
          articleContent: 'Gamification is the application of game elements in non-gaming contexts to enhance engagement and motivation.',
        }
      ]
    },
    {
      title: 'Your Fintech Idea',
      description: 'Want to bring your Fintech idea to life?',
      image: 'assets/cards/fintech-idea.png',
      articles: [
        {
          articleTitle: 'Afthonia Lab',
          articleImage: 'assets/cards/lab.png',
          articleContent: 'Gamification is the application of game elements in non-gaming contexts to enhance engagement and motivation.',
        }
      ]
    }
  ];

  getZones() {
    return this.zones;
  }

  getLearningZoneCards(): Observable<any[]> {
    return this.http.get<any[]>(this.learningZoneApiUrl);
  }

  getknowledgeHubCards() {
    return this.knowledgeHubCards;
  }

  getSkillZoneCards(): Observable<any[]> {
    return this.http.get<any[]>(this.skillZoneApiUrl);
  }
  getBriefTiles(id_academic_tile: string): Observable<any[]> {
    const briefTilesApiUrl = `https://www.skillmuni.in/SkillmuniApi2022/api/getBriefTiles?UID=2509&OID=130&AcademicTileId=${id_academic_tile}`;
    return this.http.get<any[]>(briefTilesApiUrl);
  }

  getPlaces() {
    return this.places;
  }

  getOpportunities() {
    return this.opportunityCards;
  }
}
