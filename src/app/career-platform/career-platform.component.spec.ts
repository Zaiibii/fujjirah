import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerPlatformComponent } from './career-platform.component';

describe('CareerPlatformComponent', () => {
  let component: CareerPlatformComponent;
  let fixture: ComponentFixture<CareerPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerPlatformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
