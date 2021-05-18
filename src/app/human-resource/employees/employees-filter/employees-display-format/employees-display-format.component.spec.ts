import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDisplayFormatComponent } from './employees-display-format.component';

describe('EmployeesDisplayFormatComponent', () => {
  let component: EmployeesDisplayFormatComponent;
  let fixture: ComponentFixture<EmployeesDisplayFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesDisplayFormatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesDisplayFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
