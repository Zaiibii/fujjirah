import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerSignInComponent } from './partner-sign-in.component';

describe('PartnerSignInComponent', () => {
  let component: PartnerSignInComponent;
  let fixture: ComponentFixture<PartnerSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerSignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
