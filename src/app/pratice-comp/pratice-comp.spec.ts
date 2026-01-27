import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticeComp } from './pratice-comp';

describe('PraticeComp', () => {
  let component: PraticeComp;
  let fixture: ComponentFixture<PraticeComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraticeComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraticeComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
