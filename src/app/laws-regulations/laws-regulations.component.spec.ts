import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsRegulationsComponent } from './laws-regulations.component';

describe('LawsRegulationsComponent', () => {
  let component: LawsRegulationsComponent;
  let fixture: ComponentFixture<LawsRegulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawsRegulationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawsRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
