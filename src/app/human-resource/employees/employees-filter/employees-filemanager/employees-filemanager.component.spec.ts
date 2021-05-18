import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesFilemanagerComponent } from './employees-filemanager.component';

describe('EmployeesFilemanagerComponent', () => {
  let component: EmployeesFilemanagerComponent;
  let fixture: ComponentFixture<EmployeesFilemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesFilemanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesFilemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
