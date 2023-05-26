import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTrainingPlatformOverviewComponent } from './course-training-platform-overview.component';

describe('CourseTrainingPlatformOverviewComponent', () => {
  let component: CourseTrainingPlatformOverviewComponent;
  let fixture: ComponentFixture<CourseTrainingPlatformOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTrainingPlatformOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseTrainingPlatformOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
