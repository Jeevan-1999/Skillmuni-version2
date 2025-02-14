import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import this

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearningZoneComponent } from './zone/learning-zone/learning-zone.component';
import { SkillZoneComponent } from './zone/skill-zone/skill-zone.component';
import { SkillZoneCategoryComponent } from './zone/skill-zone/skill-zone-category/skill-zone-category.component';
import { LoginComponent } from './auth/login/login.component';
import { InternationalZoneComponent } from './zone/international-zone/international-zone.component';
import { PlacementZoneComponent } from './zone/placement-zone/placement-zone.component';
import { FormsModule } from '@angular/forms';
import { EntrepreneurZoneComponent } from './zone/entrepreneur-zone/entrepreneur-zone.component';
import { OpportunityDetailComponent } from './zone/entrepreneur-zone/opportunity-detail/opportunity-detail.component';
import { EntrepreneurRegistrationComponent } from './zone/entrepreneur-zone/entrepreneur-registration/entrepreneur-registration.component';
import { InternationalRegistrationComponent } from './zone/international-zone/international-registration/international-registration.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LearningZoneCategoryComponent } from './zone/learning-zone/learning-zone-category/learning-zone-category.component';
import { SkillZoneContentComponent } from './zone/skill-zone/skill-zone-content/skill-zone-content.component';
import { ComingSoonComponent } from './shared/coming-soon/coming-soon.component';
import { ZoneArticlesComponent } from './shared/zone-articles/zone-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LearningZoneComponent,
    SkillZoneComponent,
    SkillZoneCategoryComponent,
    LoginComponent,
    InternationalZoneComponent,
    PlacementZoneComponent,
    EntrepreneurZoneComponent,
    OpportunityDetailComponent,
    EntrepreneurRegistrationComponent,
    InternationalRegistrationComponent,
    LeaderboardComponent,
    HomeComponent,
    LearningZoneCategoryComponent,
    SkillZoneContentComponent,
    ComingSoonComponent,
    ZoneArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
