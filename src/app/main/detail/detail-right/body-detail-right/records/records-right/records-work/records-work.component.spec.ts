import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsWorkComponent } from './records-work.component';

describe('RecordsWorkComponent', () => {
  let component: RecordsWorkComponent;
  let fixture: ComponentFixture<RecordsWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
