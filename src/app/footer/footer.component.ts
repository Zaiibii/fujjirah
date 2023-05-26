import { style } from '@angular/animations';
import { Component, Input, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

   @Input() displaySearchBar:Boolean=true;

  imageObject = [{
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    thumbImage: '../assets/images/ic1.png',
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
    thumbImage: '../assets/images/ic2.png'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    thumbImage: '../assets/images/ic3.png',
    
},{
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    thumbImage: '../assets/images/ic4.png',
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
    thumbImage: '../assets/images/ic5.png'
}];



 
}
