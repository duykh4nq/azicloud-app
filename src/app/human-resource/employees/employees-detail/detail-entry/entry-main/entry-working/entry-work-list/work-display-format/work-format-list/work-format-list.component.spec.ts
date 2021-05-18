import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFormatListComponent } from './work-format-list.component';

describe('WorkFormatListComponent', () => {
  let component: WorkFormatListComponent;
  let fixture: ComponentFixture<WorkFormatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkFormatListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFormatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
