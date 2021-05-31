import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContactAccommodationComponent } from './info-contact-accommodation.component';

describe('InfoContactAccommodationComponent', () => {
  let component: InfoContactAccommodationComponent;
  let fixture: ComponentFixture<InfoContactAccommodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoContactAccommodationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoContactAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
