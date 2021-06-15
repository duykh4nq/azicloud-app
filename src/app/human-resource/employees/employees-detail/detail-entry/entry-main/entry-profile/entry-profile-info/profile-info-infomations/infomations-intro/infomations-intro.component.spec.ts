import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomationsIntroComponent } from './infomations-intro.component';

describe('InfomationsIntroComponent', () => {
  let component: InfomationsIntroComponent;
  let fixture: ComponentFixture<InfomationsIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfomationsIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomationsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
