import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in-uae',
  templateUrl: './sign-in-uae.component.html',
  styleUrls: ['./style.scss']
})
export class SignInUAEComponent {
  displayRegisterForm = false;
  displayProfile=false;

  showRegisterForm(){
    this.displayRegisterForm=true;
    this.displayProfile=false
  }
  showlogin(){
    this.displayProfile=true
  }
  // showRegisterForm(){
  //   this.displayRegisterForm=true;
  // }
}
