import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWorkAssetComponent } from './info-work-asset.component';

describe('InfoWorkAssetComponent', () => {
  let component: InfoWorkAssetComponent;
  let fixture: ComponentFixture<InfoWorkAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoWorkAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWorkAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
