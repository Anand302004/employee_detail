import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
@Input() in1=0 
@Input() in2=''
@Input () in3=true
@Input () in4:number=0
@Input () in5:number=0
total=0
add(){
 this.total= this.in4 + this.in5;

}}
