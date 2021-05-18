import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesPaginationComponent } from './employees-pagination.component';

describe('EmployeesPaginationComponent', () => {
  let component: EmployeesPaginationComponent;
  let fixture: ComponentFixture<EmployeesPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
