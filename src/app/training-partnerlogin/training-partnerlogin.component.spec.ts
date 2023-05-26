import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPartnerloginComponent } from './training-partnerlogin.component';

describe('TrainingPartnerloginComponent', () => {
  let component: TrainingPartnerloginComponent;
  let fixture: ComponentFixture<TrainingPartnerloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPartnerloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingPartnerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
