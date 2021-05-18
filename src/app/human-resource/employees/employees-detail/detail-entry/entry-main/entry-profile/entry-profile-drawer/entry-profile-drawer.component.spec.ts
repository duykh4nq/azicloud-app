import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryProfileDrawerComponent } from './entry-profile-drawer.component';

describe('EntryProfileDrawerComponent', () => {
  let component: EntryProfileDrawerComponent;
  let fixture: ComponentFixture<EntryProfileDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryProfileDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryProfileDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
