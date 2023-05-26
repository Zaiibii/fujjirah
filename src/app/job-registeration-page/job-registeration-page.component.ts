import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-registeration-page',
  templateUrl: './job-registeration-page.component.html',
  styleUrls: ['./job-registeration-page.component.css']
})
export class JobRegisterationPageComponent {

  constructor(private router:Router){}

  onLikeButtonClick() {
    this.router.navigate(['/photo-video-gallery']);
  }
  
}
