import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawRegulationOverviewComponent } from './law-regulation-overview.component';

describe('LawRegulationOverviewComponent', () => {
  let component: LawRegulationOverviewComponent;
  let fixture: ComponentFixture<LawRegulationOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawRegulationOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawRegulationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
