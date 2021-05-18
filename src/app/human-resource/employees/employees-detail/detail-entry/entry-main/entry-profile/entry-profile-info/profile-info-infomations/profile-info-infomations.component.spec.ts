import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoInfomationsComponent } from './profile-info-infomations.component';

describe('ProfileInfoInfomationsComponent', () => {
  let component: ProfileInfoInfomationsComponent;
  let fixture: ComponentFixture<ProfileInfoInfomationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInfoInfomationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoInfomationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
