import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenNavbarComponent } from './atten-navbar.component';

describe('AttenNavbarComponent', () => {
  let component: AttenNavbarComponent;
  let fixture: ComponentFixture<AttenNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
