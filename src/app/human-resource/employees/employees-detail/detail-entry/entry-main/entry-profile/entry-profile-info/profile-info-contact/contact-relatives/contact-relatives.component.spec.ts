import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRelativesComponent } from './contact-relatives.component';

describe('ContactRelativesComponent', () => {
  let component: ContactRelativesComponent;
  let fixture: ComponentFixture<ContactRelativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactRelativesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRelativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
