import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationNowComponent } from './registeration-now.component';

describe('RegisterationNowComponent', () => {
  let component: RegisterationNowComponent;
  let fixture: ComponentFixture<RegisterationNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterationNowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterationNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
