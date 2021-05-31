import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoResumeSkillComponent } from './info-resume-skill.component';

describe('InfoResumeSkillComponent', () => {
  let component: InfoResumeSkillComponent;
  let fixture: ComponentFixture<InfoResumeSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoResumeSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoResumeSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
