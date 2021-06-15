import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyTimekeepingComponent } from './weekly-timekeeping.component';

describe('WeeklyTimekeepingComponent', () => {
  let component: WeeklyTimekeepingComponent;
  let fixture: ComponentFixture<WeeklyTimekeepingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyTimekeepingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyTimekeepingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
