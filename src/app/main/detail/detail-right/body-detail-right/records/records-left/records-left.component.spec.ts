import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsLeftComponent } from './records-left.component';

describe('RecordsLeftComponent', () => {
  let component: RecordsLeftComponent;
  let fixture: ComponentFixture<RecordsLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
