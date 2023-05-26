import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPartnersOverviewComponent } from './training-partners-overview.component';

describe('TrainingPartnersOverviewComponent', () => {
  let component: TrainingPartnersOverviewComponent;
  let fixture: ComponentFixture<TrainingPartnersOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPartnersOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingPartnersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
