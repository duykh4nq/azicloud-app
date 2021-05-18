import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryNavbarComponent } from './entry-navbar.component';

describe('EntryNavbarComponent', () => {
  let component: EntryNavbarComponent;
  let fixture: ComponentFixture<EntryNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
