import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulationRewardComponent } from './emulation-reward.component';

describe('EmulationRewardComponent', () => {
  let component: EmulationRewardComponent;
  let fixture: ComponentFixture<EmulationRewardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmulationRewardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmulationRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
