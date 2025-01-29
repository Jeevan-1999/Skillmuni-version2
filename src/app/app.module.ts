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
import { LearningCategoryDetailComponent } from './zone/learning-zone/learning-category-detail/learning-category-detail.component';
import { SkillZoneCategoryComponent } from './zone/skill-zone/skill-zone-category/skill-zone-category.component';
import { LoginComponent } from './auth/login/login.component';
import { InternationalZoneComponent } from './zone/international-zone/international-zone.component';
import { PlacementZoneComponent } from './zone/placement-zone/placement-zone.component';
import { InternationalZoneDetailsComponent } from './zone/international-zone/international-zone-details/international-zone-details.component';
import { FormsModule } from '@angular/forms';
import { EntrepreneurZoneComponent } from './zone/entrepreneur-zone/entrepreneur-zone.component';
import { EntrepreneurialQuotientComponent } from './zone/entrepreneur-zone/entrepreneurial-quotient/entrepreneurial-quotient.component';
import { OpportunityDetailComponent } from './zone/entrepreneur-zone/opportunity-detail/opportunity-detail.component';
import { EntrepreneurRegistrationComponent } from './zone/entrepreneur-zone/entrepreneur-registration/entrepreneur-registration.component';
import { InternationalRegistrationComponent } from './zone/international-zone/international-registration/international-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LearningZoneComponent,
    SkillZoneComponent,
    LearningCategoryDetailComponent,
    SkillZoneCategoryComponent,
    LoginComponent,
    InternationalZoneComponent,
    PlacementZoneComponent,
    InternationalZoneDetailsComponent,
    EntrepreneurZoneComponent,
    EntrepreneurialQuotientComponent,
    OpportunityDetailComponent,
    EntrepreneurRegistrationComponent,
    InternationalRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
