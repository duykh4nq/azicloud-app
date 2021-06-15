import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomationsHealthComponent } from './infomations-health.component';

describe('InfomationsHealthComponent', () => {
  let component: InfomationsHealthComponent;
  let fixture: ComponentFixture<InfomationsHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfomationsHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomationsHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
