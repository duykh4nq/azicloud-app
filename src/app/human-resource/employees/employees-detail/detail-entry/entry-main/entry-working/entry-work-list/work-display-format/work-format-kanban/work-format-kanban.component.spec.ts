import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFormatKanbanComponent } from './work-format-kanban.component';

describe('WorkFormatKanbanComponent', () => {
  let component: WorkFormatKanbanComponent;
  let fixture: ComponentFixture<WorkFormatKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkFormatKanbanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFormatKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
