import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisCounter } from './dis-counter';

describe('DisCounter', () => {
  let component: DisCounter;
  let fixture: ComponentFixture<DisCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
