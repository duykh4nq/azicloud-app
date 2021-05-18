import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryWorkingComponent } from './entry-working.component';

describe('EntryWorkingComponent', () => {
  let component: EntryWorkingComponent;
  let fixture: ComponentFixture<EntryWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryWorkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
