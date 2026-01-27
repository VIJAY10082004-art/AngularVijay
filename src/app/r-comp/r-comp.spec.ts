import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RComp } from './r-comp';

describe('RComp', () => {
  let component: RComp;
  let fixture: ComponentFixture<RComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
