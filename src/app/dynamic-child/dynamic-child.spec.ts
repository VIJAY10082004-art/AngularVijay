import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicChild } from './dynamic-child';

describe('DynamicChild', () => {
  let component: DynamicChild;
  let fixture: ComponentFixture<DynamicChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
