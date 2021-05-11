import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingListComponent } from './working-list.component';

describe('WorkingListComponent', () => {
  let component: WorkingListComponent;
  let fixture: ComponentFixture<WorkingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
