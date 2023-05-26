import { Component } from '@angular/core';

@Component({
  selector: 'app-partner-sign-in',
  templateUrl: './partner-sign-in.component.html',
  styleUrls: ['./partner-sign-in.component.css']
})
export class PartnerSignInComponent {
  displayRegister=false;

  showregister(){
    this.displayRegister=true;
  }
  backtologin(){
    this.displayRegister=false;
  }
}
