import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorMsgComponent } from './director-msg.component';

describe('DirectorMsgComponent', () => {
  let component: DirectorMsgComponent;
  let fixture: ComponentFixture<DirectorMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorMsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
