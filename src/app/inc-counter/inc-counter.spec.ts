import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncCounter } from './inc-counter';

describe('IncCounter', () => {
  let component: IncCounter;
  let fixture: ComponentFixture<IncCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
