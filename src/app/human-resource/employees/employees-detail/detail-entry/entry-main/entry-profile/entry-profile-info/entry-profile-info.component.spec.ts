import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryProfileInfoComponent } from './entry-profile-info.component';

describe('EntryProfileInfoComponent', () => {
  let component: EntryProfileInfoComponent;
  let fixture: ComponentFixture<EntryProfileInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryProfileInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
