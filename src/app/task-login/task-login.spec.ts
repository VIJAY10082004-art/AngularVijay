import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLogin } from './task-login';

describe('TaskLogin', () => {
  let component: TaskLogin;
  let fixture: ComponentFixture<TaskLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
