import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterForPartnerComponent } from './register-for-partner.component';

describe('RegisterForPartnerComponent', () => {
  let component: RegisterForPartnerComponent;
  let fixture: ComponentFixture<RegisterForPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterForPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterForPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
