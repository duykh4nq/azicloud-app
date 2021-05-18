import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesFilterNormalComponent } from './employees-filter-normal.component';

describe('EmployeesFilterNormalComponent', () => {
  let component: EmployeesFilterNormalComponent;
  let fixture: ComponentFixture<EmployeesFilterNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesFilterNormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesFilterNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
