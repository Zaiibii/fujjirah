import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTrainingPlatformComponent } from './course-training-platform.component';

describe('CourseTrainingPlatformComponent', () => {
  let component: CourseTrainingPlatformComponent;
  let fixture: ComponentFixture<CourseTrainingPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTrainingPlatformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseTrainingPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
