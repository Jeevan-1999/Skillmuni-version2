import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpreneurZoneComponent } from './enterpreneur-zone.component';

describe('EnterpreneurZoneComponent', () => {
  let component: EnterpreneurZoneComponent;
  let fixture: ComponentFixture<EnterpreneurZoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterpreneurZoneComponent]
    });
    fixture = TestBed.createComponent(EnterpreneurZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
