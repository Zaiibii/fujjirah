import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCenterOpenDataComponent } from './media-center-open-data.component';

describe('MediaCenterOpenDataComponent', () => {
  let component: MediaCenterOpenDataComponent;
  let fixture: ComponentFixture<MediaCenterOpenDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaCenterOpenDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaCenterOpenDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
