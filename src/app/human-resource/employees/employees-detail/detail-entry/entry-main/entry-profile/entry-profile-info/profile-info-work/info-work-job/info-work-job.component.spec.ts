import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWorkJobComponent } from './info-work-job.component';

describe('InfoWorkJobComponent', () => {
  let component: InfoWorkJobComponent;
  let fixture: ComponentFixture<InfoWorkJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoWorkJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWorkJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
