import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingKanbanComponent } from './working-kanban.component';

describe('WorkingKanbanComponent', () => {
  let component: WorkingKanbanComponent;
  let fixture: ComponentFixture<WorkingKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingKanbanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
