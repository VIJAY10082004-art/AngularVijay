import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpComp } from './emp-comp';

describe('EmpComp', () => {
  let component: EmpComp;
  let fixture: ComponentFixture<EmpComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
