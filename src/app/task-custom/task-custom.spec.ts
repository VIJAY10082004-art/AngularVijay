import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCustom } from './task-custom';

describe('TaskCustom', () => {
  let component: TaskCustom;
  let fixture: ComponentFixture<TaskCustom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCustom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCustom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
