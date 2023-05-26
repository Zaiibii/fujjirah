import { Component } from '@angular/core';


@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent {
  // constructor(public dialog:MatDialog){}
  // ondisplay(){
  //   this.dialog.open(DialogComponentComponent)
  // }
  ondisplay(){
    const modelDiv=document.getElementById('myModal');
    if(modelDiv!=null){
      modelDiv.style.display='block'
    }
  }
  CloseModal(){
    const modelDiv=document.getElementById('myModal');
    if(modelDiv!=null){
      modelDiv.style.display='none'
    }
  }
}
