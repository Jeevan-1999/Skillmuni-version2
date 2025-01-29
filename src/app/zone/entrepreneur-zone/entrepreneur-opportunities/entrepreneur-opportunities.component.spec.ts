import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurOpportunitiesComponent } from './entrepreneur-opportunities.component';

describe('EntrepreneurOpportunitiesComponent', () => {
  let component: EntrepreneurOpportunitiesComponent;
  let fixture: ComponentFixture<EntrepreneurOpportunitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrepreneurOpportunitiesComponent]
    });
    fixture = TestBed.createComponent(EntrepreneurOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
