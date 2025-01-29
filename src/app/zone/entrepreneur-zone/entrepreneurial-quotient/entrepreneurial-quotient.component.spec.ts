import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurialQuotientComponent } from './entrepreneurial-quotient.component';

describe('EntrepreneurialQuotientComponent', () => {
  let component: EntrepreneurialQuotientComponent;
  let fixture: ComponentFixture<EntrepreneurialQuotientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrepreneurialQuotientComponent]
    });
    fixture = TestBed.createComponent(EntrepreneurialQuotientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
