import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPartnersComponent } from './training-partners.component';

describe('TrainingPartnersComponent', () => {
  let component: TrainingPartnersComponent;
  let fixture: ComponentFixture<TrainingPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
