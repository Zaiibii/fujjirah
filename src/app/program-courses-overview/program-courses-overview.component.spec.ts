import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCoursesOverviewComponent } from './program-courses-overview.component';

describe('ProgramCoursesOverviewComponent', () => {
  let component: ProgramCoursesOverviewComponent;
  let fixture: ComponentFixture<ProgramCoursesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramCoursesOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramCoursesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
