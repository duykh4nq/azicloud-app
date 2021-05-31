import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWorkContractComponent } from './info-work-contract.component';

describe('InfoWorkContractComponent', () => {
  let component: InfoWorkContractComponent;
  let fixture: ComponentFixture<InfoWorkContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoWorkContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWorkContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
