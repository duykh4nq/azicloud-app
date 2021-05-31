import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWorkHistoryComponent } from './info-work-history.component';

describe('InfoWorkHistoryComponent', () => {
  let component: InfoWorkHistoryComponent;
  let fixture: ComponentFixture<InfoWorkHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoWorkHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWorkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
