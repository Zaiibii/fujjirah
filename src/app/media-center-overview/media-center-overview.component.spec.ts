import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCenterOverviewComponent } from './media-center-overview.component';

describe('MediaCenterOverviewComponent', () => {
  let component: MediaCenterOverviewComponent;
  let fixture: ComponentFixture<MediaCenterOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaCenterOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaCenterOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
