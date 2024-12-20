import { Component } from '@angular/core';

@Component({
  selector: 'app-eight',
  templateUrl: './eight.component.html',
  styleUrls: ['./eight.component.css']
})
export class EightComponent {
input1=0
input2=''
input3=true
input4:number=0
input5:number=0
inc(){
  this.input1++
}
dec(){
  this.input1--
}
check(){
  this.input3= !this.input3
}


}
