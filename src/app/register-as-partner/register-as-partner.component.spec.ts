import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsPartnerComponent } from './register-as-partner.component';

describe('RegisterAsPartnerComponent', () => {
  let component: RegisterAsPartnerComponent;
  let fixture: ComponentFixture<RegisterAsPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAsPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAsPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
