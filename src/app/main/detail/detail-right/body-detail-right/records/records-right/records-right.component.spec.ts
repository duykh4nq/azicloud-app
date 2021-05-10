import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsRightComponent } from './records-right.component';

describe('RecordsRightComponent', () => {
  let component: RecordsRightComponent;
  let fixture: ComponentFixture<RecordsRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
