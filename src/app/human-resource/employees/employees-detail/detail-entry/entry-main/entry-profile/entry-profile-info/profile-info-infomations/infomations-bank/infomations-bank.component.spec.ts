import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomationsBankComponent } from './infomations-bank.component';

describe('InfomationsBankComponent', () => {
  let component: InfomationsBankComponent;
  let fixture: ComponentFixture<InfomationsBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfomationsBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomationsBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
