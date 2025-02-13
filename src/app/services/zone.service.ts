import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  private learningZoneApiUrl = 'https://www.skillmuni.in/SkillmuniApi2022/api/GetAcademicTiles?UID=2509&OID=130';

  private skillZoneApiUrl = 'https://www.skillmuni.in/SkillmuniApi2022/api/GetSkillTiles?UID=2509&OID=130';

  private countryApiUrl = 'https://www.skillmuni.in/SkillmuniApi2022/api/getCategoryTileListForNonLearning?UID=2509&OID=130&tile_type=2';

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

  getPlaces(): Observable<any> {
    return this.http.get<any>(this.countryApiUrl);
  }

  getBriefListForStudyAbroad(tileCode: string): Observable<any> {
    const apiUrl = `https://www.skillmuni.in/SkillmuniApi2022/api/getBriefListForStudyAbroad?UID=2509&OID=130&ENC=${tileCode}`;
    return this.http.get<any>(apiUrl);
  }

  getOpportunities() {
    return this.opportunityCards;
  }
}
