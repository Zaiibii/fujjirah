import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRLawComponent } from './hr-law.component';

describe('HRLawComponent', () => {
  let component: HRLawComponent;
  let fixture: ComponentFixture<HRLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRLawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HRLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
