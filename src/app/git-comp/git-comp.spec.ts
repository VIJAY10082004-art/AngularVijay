import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitComp } from './git-comp';

describe('GitComp', () => {
  let component: GitComp;
  let fixture: ComponentFixture<GitComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
