import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesRegisterationComponent } from './courses-registeration.component';

describe('CoursesRegisterationComponent', () => {
  let component: CoursesRegisterationComponent;
  let fixture: ComponentFixture<CoursesRegisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesRegisterationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
