import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEmergencyComponent } from './contact-emergency.component';

describe('ContactEmergencyComponent', () => {
  let component: ContactEmergencyComponent;
  let fixture: ComponentFixture<ContactEmergencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactEmergencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEmergencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
