import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpComp } from './http-comp';

describe('HttpComp', () => {
  let component: HttpComp;
  let fixture: ComponentFixture<HttpComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
