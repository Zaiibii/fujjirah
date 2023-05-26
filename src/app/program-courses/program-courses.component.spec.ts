import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCoursesComponent } from './program-courses.component';

describe('ProgramCoursesComponent', () => {
  let component: ProgramCoursesComponent;
  let fixture: ComponentFixture<ProgramCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
