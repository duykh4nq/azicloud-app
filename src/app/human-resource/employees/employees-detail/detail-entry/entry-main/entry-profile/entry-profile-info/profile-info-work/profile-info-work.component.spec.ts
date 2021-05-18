import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoWorkComponent } from './profile-info-work.component';

describe('ProfileInfoWorkComponent', () => {
  let component: ProfileInfoWorkComponent;
  let fixture: ComponentFixture<ProfileInfoWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInfoWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
