import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillZoneContentComponent } from './skill-zone-content.component';

describe('SkillZoneContentComponent', () => {
  let component: SkillZoneContentComponent;
  let fixture: ComponentFixture<SkillZoneContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillZoneContentComponent]
    });
    fixture = TestBed.createComponent(SkillZoneContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
