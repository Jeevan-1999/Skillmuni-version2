import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { EnterpreneurZoneComponent } from './zone/enterpreneur-zone/enterpreneur-zone.component';
import { PlacementZoneComponent } from './zone/placement-zone/placement-zone.component';

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
    EnterpreneurZoneComponent,
    PlacementZoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
