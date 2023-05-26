import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerPlatformOverviewComponent } from './career-platform-overview.component';

describe('CareerPlatformOverviewComponent', () => {
  let component: CareerPlatformOverviewComponent;
  let fixture: ComponentFixture<CareerPlatformOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerPlatformOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerPlatformOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
