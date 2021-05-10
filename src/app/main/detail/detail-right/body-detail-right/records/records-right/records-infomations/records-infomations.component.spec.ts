import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsInfomationsComponent } from './records-infomations.component';

describe('RecordsInfomationsComponent', () => {
  let component: RecordsInfomationsComponent;
  let fixture: ComponentFixture<RecordsInfomationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsInfomationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsInfomationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
