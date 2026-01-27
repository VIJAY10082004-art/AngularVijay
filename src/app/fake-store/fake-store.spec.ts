import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeStore } from './fake-store';

describe('FakeStore', () => {
  let component: FakeStore;
  let fixture: ComponentFixture<FakeStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeStore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
