import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPartnerloginOverviewComponent } from './training-partnerlogin-overview.component';

describe('TrainingPartnerloginOverviewComponent', () => {
  let component: TrainingPartnerloginOverviewComponent;
  let fixture: ComponentFixture<TrainingPartnerloginOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPartnerloginOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingPartnerloginOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
