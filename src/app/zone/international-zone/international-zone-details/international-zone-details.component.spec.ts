import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalZoneDetailsComponent } from './international-zone-details.component';

describe('InternationalZoneDetailsComponent', () => {
  let component: InternationalZoneDetailsComponent;
  let fixture: ComponentFixture<InternationalZoneDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternationalZoneDetailsComponent]
    });
    fixture = TestBed.createComponent(InternationalZoneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
