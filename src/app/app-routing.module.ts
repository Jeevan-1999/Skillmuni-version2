import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkillZoneComponent } from './zone/skill-zone/skill-zone.component';
import { LearningZoneComponent } from './zone/learning-zone/learning-zone.component';

const routes: Routes = [
  {
    component: DashboardComponent,
    path: '', // Corrected path
  },
  {
    component: SkillZoneComponent,
    path: 'skill-zone', // Corrected path
  },
  {
    component: LearningZoneComponent,
    path: 'learning-zone', // Corrected path
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
