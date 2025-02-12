import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillZoneComponent } from './zone/skill-zone/skill-zone.component';
import { LearningZoneComponent } from './zone/learning-zone/learning-zone.component';
import { SkillZoneCategoryComponent } from './zone/skill-zone/skill-zone-category/skill-zone-category.component';
import { LoginComponent } from './auth/login/login.component';
import { InternationalZoneComponent } from './zone/international-zone/international-zone.component';
import { PlacementZoneComponent } from './zone/placement-zone/placement-zone.component';
import { InternationalZoneDetailsComponent } from './zone/international-zone/international-zone-details/international-zone-details.component';
import { EntrepreneurZoneComponent } from './zone/entrepreneur-zone/entrepreneur-zone.component';
import { EntrepreneurialQuotientComponent } from './zone/entrepreneur-zone/entrepreneurial-quotient/entrepreneurial-quotient.component';
import { OpportunityDetailComponent } from './zone/entrepreneur-zone/opportunity-detail/opportunity-detail.component';
import { InternationalRegistrationComponent } from './zone/international-zone/international-registration/international-registration.component';
import { EntrepreneurRegistrationComponent } from './zone/entrepreneur-zone/entrepreneur-registration/entrepreneur-registration.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearningZoneCategoryComponent } from './zone/learning-zone/learning-zone-category/learning-zone-category.component';

const routes: Routes = [

  {
    path: '', redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'home',
    component: HomeComponent, // Default path redirects to home/manin page
  },


  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: 'international-zone',
    component: InternationalZoneComponent,
  },
  {
    path: 'international-zone/:placeName',
    component: InternationalZoneDetailsComponent
  },
  {
    path: 'international-zone/article/register',
    component: InternationalRegistrationComponent
  },
  {
    path: 'entrepreneur-zone',
    component: EntrepreneurZoneComponent,
  },

  {
    path: 'entrepreneur-zone/article/register',
    component: EntrepreneurRegistrationComponent
  },
  {
    path: 'placement-zone',
    component: PlacementZoneComponent,
  },
  {
    path: 'skill-zone',
    component: SkillZoneComponent,
  },
  {
    path: 'learning-zone',
    component: LearningZoneComponent,
  },

  {
    path: 'skill-zone-category/:id/:title',
    component: SkillZoneCategoryComponent,
  },

  {
    path: 'learning-zone-category/:id/:title',
    component: LearningZoneCategoryComponent,
  },
  {
    path: 'entrepreneur-zone/entrepreneurial-quotient',
    component: EntrepreneurialQuotientComponent,
  },

  {
    path: 'entrepreneur-zone/opportunity/:title',
    component: OpportunityDetailComponent,
  },


  { path: 'leaderboard', component: LeaderboardComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }