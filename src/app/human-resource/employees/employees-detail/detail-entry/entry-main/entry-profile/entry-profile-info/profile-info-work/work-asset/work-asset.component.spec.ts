import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAssetComponent } from './work-asset.component';

describe('WorkAssetComponent', () => {
  let component: WorkAssetComponent;
  let fixture: ComponentFixture<WorkAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
