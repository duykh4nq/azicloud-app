import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCalenderComponent } from './work-calender.component';

describe('WorkCalenderComponent', () => {
  let component: WorkCalenderComponent;
  let fixture: ComponentFixture<WorkCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
