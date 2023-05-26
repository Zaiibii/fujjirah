import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInUAEComponent } from './sign-in-uae.component';

describe('SignInUAEComponent', () => {
  let component: SignInUAEComponent;
  let fixture: ComponentFixture<SignInUAEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInUAEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInUAEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
