import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttprouterComp } from './httprouter-comp';

describe('HttprouterComp', () => {
  let component: HttprouterComp;
  let fixture: ComponentFixture<HttprouterComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttprouterComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttprouterComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
