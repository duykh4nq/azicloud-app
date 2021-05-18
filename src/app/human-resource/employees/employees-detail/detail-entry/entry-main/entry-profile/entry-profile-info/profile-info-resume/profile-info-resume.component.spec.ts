import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoResumeComponent } from './profile-info-resume.component';

describe('ProfileInfoResumeComponent', () => {
  let component: ProfileInfoResumeComponent;
  let fixture: ComponentFixture<ProfileInfoResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInfoResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
