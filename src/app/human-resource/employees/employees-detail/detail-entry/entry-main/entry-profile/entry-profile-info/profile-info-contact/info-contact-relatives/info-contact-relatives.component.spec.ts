import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContactRelativesComponent } from './info-contact-relatives.component';

describe('InfoContactRelativesComponent', () => {
  let component: InfoContactRelativesComponent;
  let fixture: ComponentFixture<InfoContactRelativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoContactRelativesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoContactRelativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
