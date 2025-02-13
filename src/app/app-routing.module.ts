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
import { RegistrationComponent } from './zone/international-zone/registration/registration.component';
import { EntrepreneurZoneComponent } from './zone/entrepreneur-zone/entrepreneur-zone.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, // Default path redirects to Dashboard
  },
  {
    path: 'dashboard',
    component: DashboardComponent, // Default path redirects to Dashboard
  },
  {
    path: 'international-zone',
    component: InternationalZoneComponent,
  },
  { path: 'international-zone/:placeName', component: InternationalZoneDetailsComponent },

  { path: 'register', component: RegistrationComponent },

  {
    path: 'entrepreneur-zone',
    component: EntrepreneurZoneComponent,
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
    path: 'skill-zone-category/:title', // Path with a parameter for category titles
    component: SkillZoneCategoryComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: '', // Fallback route redirects to Dashboard
  // },

  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }