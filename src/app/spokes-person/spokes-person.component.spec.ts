import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpokesPersonComponent } from './spokes-person.component';

describe('SpokesPersonComponent', () => {
  let component: SpokesPersonComponent;
  let fixture: ComponentFixture<SpokesPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpokesPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpokesPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
