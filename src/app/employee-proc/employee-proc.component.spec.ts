import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProcComponent } from './employee-proc.component';

describe('EmployeeProcComponent', () => {
  let component: EmployeeProcComponent;
  let fixture: ComponentFixture<EmployeeProcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeProcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
