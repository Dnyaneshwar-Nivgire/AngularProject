import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearnDirectives';
  color="yellow";
  
  data:any={
    username:"atul",
    password:"12334"
  }
   
  numbers:any=[1,2,3,4] 

  students:any=[
    {
    id:1,
    name:"Ram",
    age:23
  },
  {
    id:2,
    name:"sham",
    age:24
  },

];

//Attributes directives

isHighlight=false;
highlightOnOff(){
  this.isHighlight =!this.isHighlight;

}
fontSize='32px';
increase(){
  this.fontSize=parseInt(this.fontSize)+4+'px';
}
decrease(){
  this.fontSize=parseInt(this.fontSize)-4+'px';
}
}
