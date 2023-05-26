import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalCultureComponent } from './legal-culture.component';

describe('LegalCultureComponent', () => {
  let component: LegalCultureComponent;
  let fixture: ComponentFixture<LegalCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalCultureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
