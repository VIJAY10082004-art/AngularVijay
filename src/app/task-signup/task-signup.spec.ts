import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSignup } from './task-signup';

describe('TaskSignup', () => {
  let component: TaskSignup;
  let fixture: ComponentFixture<TaskSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskSignup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
