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

  private entrepreneur = 'https://www.skillmuni.in/SkillmuniApi2022/api/getCategoryTileListForNonLearning?UID=2509&OID=130&tile_type=3';

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







  getZones() {
    return this.zones;
  }

  getLearningZoneCards(): Observable<any[]> {
    return this.http.get<any[]>(this.learningZoneApiUrl);
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
  getBriefListwithAcademy(tileCode: string, id_academic_tile: string): Observable<any> {
    const apiUrl = `https://www.skillmuni.in/SULAPIProduction_new/api/getBriefListwithAcademy?UID=2509&OID=130&ENC=${tileCode}&id_academy=${id_academic_tile}`;
    return this.http.get<any>(apiUrl);
  }


  getEntrepreneurOpportunities(): Observable<any> {
    return this.http.get<any>(this.entrepreneur);
  }
}
