import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFormatMemberComponent } from './work-format-member.component';

describe('WorkFormatMemberComponent', () => {
  let component: WorkFormatMemberComponent;
  let fixture: ComponentFixture<WorkFormatMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkFormatMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFormatMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
