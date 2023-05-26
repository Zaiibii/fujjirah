import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoVideoGalleryComponent } from './photo-video-gallery.component';

describe('PhotoVideoGalleryComponent', () => {
  let component: PhotoVideoGalleryComponent;
  let fixture: ComponentFixture<PhotoVideoGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoVideoGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoVideoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
