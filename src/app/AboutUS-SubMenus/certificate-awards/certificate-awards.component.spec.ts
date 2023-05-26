import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateAwardsComponent } from './certificate-awards.component';

describe('CertificateAwardsComponent', () => {
  let component: CertificateAwardsComponent;
  let fixture: ComponentFixture<CertificateAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateAwardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
