import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCal } from './service-cal';

describe('ServiceCal', () => {
  let component: ServiceCal;
  let fixture: ComponentFixture<ServiceCal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
