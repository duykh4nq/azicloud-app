import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingMemberComponent } from './working-member.component';

describe('WorkingMemberComponent', () => {
  let component: WorkingMemberComponent;
  let fixture: ComponentFixture<WorkingMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
