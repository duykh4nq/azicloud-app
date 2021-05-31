import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContactAddressComponent } from './info-contact-address.component';

describe('InfoContactAddressComponent', () => {
  let component: InfoContactAddressComponent;
  let fixture: ComponentFixture<InfoContactAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoContactAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoContactAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
