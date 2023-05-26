import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRegisterationPageComponent } from './job-registeration-page.component';

describe('JobRegisterationPageComponent', () => {
  let component: JobRegisterationPageComponent;
  let fixture: ComponentFixture<JobRegisterationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobRegisterationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobRegisterationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
