import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicParent } from './dynamic-parent';

describe('DynamicParent', () => {
  let component: DynamicParent;
  let fixture: ComponentFixture<DynamicParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
