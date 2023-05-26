import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthSafteyPolicyComponent } from './health-saftey-policy.component';

describe('HealthSafteyPolicyComponent', () => {
  let component: HealthSafteyPolicyComponent;
  let fixture: ComponentFixture<HealthSafteyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthSafteyPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthSafteyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
