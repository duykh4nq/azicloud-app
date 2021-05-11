import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkBodyComponent } from './work-body.component';

describe('WorkBodyComponent', () => {
  let component: WorkBodyComponent;
  let fixture: ComponentFixture<WorkBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
