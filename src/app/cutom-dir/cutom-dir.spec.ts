import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomDir } from './cutom-dir';

describe('CutomDir', () => {
  let component: CutomDir;
  let fixture: ComponentFixture<CutomDir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutomDir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomDir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
