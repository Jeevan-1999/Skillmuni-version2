import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { LearningCategoryDetailComponent } from './zone/learning-zone/learning-category-detail/learning-category-detail.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

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
    path: 'dashboard',
    component: DashboardComponent, // Default path redirects to Dashboard
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
    path: 'learning-category-detail/:title',
    component: LearningCategoryDetailComponent
  },
  {
    path: 'skill-zone-category/:title',
    component: SkillZoneCategoryComponent,
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