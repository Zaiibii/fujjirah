import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-law-regulation-overview',
  templateUrl: './law-regulation-overview.component.html',
  styleUrls: ['./law-regulation-overview.component.css']
})
export class LawRegulationOverviewComponent {

  constructor(private router:Router){}

  gotohr(){
    this.router.navigate(['hr-law']);
  }

  gotocircular(){
    this.router.navigate(['circular'])
  }
}



