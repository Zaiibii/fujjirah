import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingHallBookingComponent } from './training-hall-booking.component';

describe('TrainingHallBookingComponent', () => {
  let component: TrainingHallBookingComponent;
  let fixture: ComponentFixture<TrainingHallBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingHallBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingHallBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
