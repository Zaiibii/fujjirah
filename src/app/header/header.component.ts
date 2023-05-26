import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  currentUrl: string;


  isMenuClicked: boolean = false;
  
  homeLink: string;

  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.isMenuClicked = true;
  }
  

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/') {
          this.homeLink = 'Home';
        } else {
          this.homeLink = '<i class="fa fa-home"></i>';
        }
      }
    });
  }

  isNavbarOpen:boolean = false;

  toggleNavbar(){
    this.isNavbarOpen=!this.isNavbarOpen;
  }
}
