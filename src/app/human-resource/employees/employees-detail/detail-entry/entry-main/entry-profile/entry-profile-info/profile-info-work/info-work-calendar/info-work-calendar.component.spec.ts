import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWorkCalendarComponent } from './info-work-calendar.component';

describe('InfoWorkCalendarComponent', () => {
  let component: InfoWorkCalendarComponent;
  let fixture: ComponentFixture<InfoWorkCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoWorkCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWorkCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
