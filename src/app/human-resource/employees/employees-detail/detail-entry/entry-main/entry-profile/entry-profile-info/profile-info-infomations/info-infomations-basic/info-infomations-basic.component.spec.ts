import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoInfomationsBasicComponent } from './info-infomations-basic.component';

describe('InfoInfomationsBasicComponent', () => {
  let component: InfoInfomationsBasicComponent;
  let fixture: ComponentFixture<InfoInfomationsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoInfomationsBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoInfomationsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
