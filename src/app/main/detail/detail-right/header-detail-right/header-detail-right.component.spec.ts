import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDetailRightComponent } from './header-detail-right.component';

describe('HeaderDetailRightComponent', () => {
  let component: HeaderDetailRightComponent;
  let fixture: ComponentFixture<HeaderDetailRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDetailRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDetailRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
