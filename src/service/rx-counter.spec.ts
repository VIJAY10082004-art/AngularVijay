import { TestBed } from '@angular/core/testing';

import { RxCounter } from './rx-counter';

describe('RxCounter', () => {
  let service: RxCounter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxCounter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
