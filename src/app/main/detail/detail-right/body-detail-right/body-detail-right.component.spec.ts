import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyDetailRightComponent } from './body-detail-right.component';

describe('BodyDetailRightComponent', () => {
  let component: BodyDetailRightComponent;
  let fixture: ComponentFixture<BodyDetailRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyDetailRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyDetailRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
