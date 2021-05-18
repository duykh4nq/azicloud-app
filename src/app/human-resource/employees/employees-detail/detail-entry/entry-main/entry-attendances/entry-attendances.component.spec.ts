import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryAttendancesComponent } from './entry-attendances.component';

describe('EntryAttendancesComponent', () => {
  let component: EntryAttendancesComponent;
  let fixture: ComponentFixture<EntryAttendancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryAttendancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryAttendancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
