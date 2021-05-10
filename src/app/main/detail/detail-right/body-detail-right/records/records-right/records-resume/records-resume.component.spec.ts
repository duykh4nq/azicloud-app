import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsResumeComponent } from './records-resume.component';

describe('RecordsResumeComponent', () => {
  let component: RecordsResumeComponent;
  let fixture: ComponentFixture<RecordsResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
