import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoInfomationsBankComponent } from './info-infomations-bank.component';

describe('InfoInfomationsBankComponent', () => {
  let component: InfoInfomationsBankComponent;
  let fixture: ComponentFixture<InfoInfomationsBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoInfomationsBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoInfomationsBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
