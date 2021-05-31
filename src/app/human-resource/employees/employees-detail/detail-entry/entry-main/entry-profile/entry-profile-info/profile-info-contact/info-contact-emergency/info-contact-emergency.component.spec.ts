import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContactEmergencyComponent } from './info-contact-emergency.component';

describe('InfoContactEmergencyComponent', () => {
  let component: InfoContactEmergencyComponent;
  let fixture: ComponentFixture<InfoContactEmergencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoContactEmergencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoContactEmergencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
