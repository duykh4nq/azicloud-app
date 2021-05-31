import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoInfomationsHealthComponent } from './info-infomations-health.component';

describe('InfoInfomationsHealthComponent', () => {
  let component: InfoInfomationsHealthComponent;
  let fixture: ComponentFixture<InfoInfomationsHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoInfomationsHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoInfomationsHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
