import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryWorkListComponent } from './entry-work-list.component';

describe('EntryWorkListComponent', () => {
  let component: EntryWorkListComponent;
  let fixture: ComponentFixture<EntryWorkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryWorkListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryWorkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
