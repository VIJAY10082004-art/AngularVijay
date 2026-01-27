import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRou } from './nested-rou';

describe('NestedRou', () => {
  let component: NestedRou;
  let fixture: ComponentFixture<NestedRou>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedRou]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedRou);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
