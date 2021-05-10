import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsContactComponent } from './records-contact.component';

describe('RecordsContactComponent', () => {
  let component: RecordsContactComponent;
  let fixture: ComponentFixture<RecordsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
