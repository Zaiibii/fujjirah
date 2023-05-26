import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalAffairsComponent } from './legal-affairs.component';

describe('LegalAffairsComponent', () => {
  let component: LegalAffairsComponent;
  let fixture: ComponentFixture<LegalAffairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalAffairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
