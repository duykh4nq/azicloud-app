import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomationsBasicComponent } from './infomations-basic.component';

describe('InfomationsBasicComponent', () => {
  let component: InfomationsBasicComponent;
  let fixture: ComponentFixture<InfomationsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfomationsBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomationsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
