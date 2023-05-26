import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarMenueComponent } from './side-bar-menue.component';

describe('SideBarMenueComponent', () => {
  let component: SideBarMenueComponent;
  let fixture: ComponentFixture<SideBarMenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarMenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
