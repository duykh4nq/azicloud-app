import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAccomComponent } from './contact-accom.component';

describe('ContactAccomComponent', () => {
  let component: ContactAccomComponent;
  let fixture: ComponentFixture<ContactAccomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAccomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAccomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
