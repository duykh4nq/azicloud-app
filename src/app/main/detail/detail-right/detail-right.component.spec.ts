import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRightComponent } from './detail-right.component';

describe('DetailRightComponent', () => {
  let component: DetailRightComponent;
  let fixture: ComponentFixture<DetailRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
