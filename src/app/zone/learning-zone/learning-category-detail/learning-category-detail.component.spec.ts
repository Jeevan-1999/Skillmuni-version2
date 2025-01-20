import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCategoryDetailComponent } from './learning-category-detail.component';

describe('LearningCategoryDetailComponent', () => {
  let component: LearningCategoryDetailComponent;
  let fixture: ComponentFixture<LearningCategoryDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearningCategoryDetailComponent]
    });
    fixture = TestBed.createComponent(LearningCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
