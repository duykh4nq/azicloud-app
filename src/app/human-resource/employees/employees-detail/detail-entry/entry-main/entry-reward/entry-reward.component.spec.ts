import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryRewardComponent } from './entry-reward.component';

describe('EntryRewardComponent', () => {
  let component: EntryRewardComponent;
  let fixture: ComponentFixture<EntryRewardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryRewardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
