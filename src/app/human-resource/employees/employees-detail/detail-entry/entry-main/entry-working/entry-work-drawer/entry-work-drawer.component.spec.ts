import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryWorkDrawerComponent } from './entry-work-drawer.component';

describe('EntryWorkDrawerComponent', () => {
  let component: EntryWorkDrawerComponent;
  let fixture: ComponentFixture<EntryWorkDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryWorkDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryWorkDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
