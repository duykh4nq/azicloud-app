import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesFilterListComponent } from './employees-filter-list.component';

describe('EmployeesFilterListComponent', () => {
  let component: EmployeesFilterListComponent;
  let fixture: ComponentFixture<EmployeesFilterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesFilterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
