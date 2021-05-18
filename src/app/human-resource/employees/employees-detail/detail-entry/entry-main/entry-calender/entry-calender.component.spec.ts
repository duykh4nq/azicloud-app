import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryCalenderComponent } from './entry-calender.component';

describe('EntryCalenderComponent', () => {
  let component: EntryCalenderComponent;
  let fixture: ComponentFixture<EntryCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
