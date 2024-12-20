import { Component } from '@angular/core';
import { SerService } from '../ser.service';
import { ElevenComponent } from '../eleven/eleven.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  constructor(public cons:SerService){}
  imgurl=''
  input=''
  addurl(){
    this.imgurl=this.input
  }
  add(){
    this.cons.input++
  }
  cube(){
    this.cons.add=this.cons.input*this.cons.input*this.cons.input
  }
  
}
