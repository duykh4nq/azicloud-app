import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoResumeExperienceComponent } from './info-resume-experience.component';

describe('InfoResumeExperienceComponent', () => {
  let component: InfoResumeExperienceComponent;
  let fixture: ComponentFixture<InfoResumeExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoResumeExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoResumeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
