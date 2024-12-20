import { Component } from '@angular/core';
import { ElevenComponent } from '../eleven/eleven.component';

@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.css']
})
export class SevenComponent {
color=''
setcolor=''
num=0
msg=''
setgender=''
gender=''

colorchange(){
  if(this.color=='green'){
    this.setcolor=this.color
  }
  else if(this.color=='red'){
    this.setcolor=this.color
  }
  else{
    this.setcolor=this.color
  }
}
check(){
  if(this.num%2==0){
    this.msg='even number'
  }
  else {
    this.msg='odd number'
  }
  
}
// checkgender(check:string){
// this.setgender = check == 'male' ? 'blue' : 'pink'
// console.log(this.setgender)
// }
checkgender1(){
  this.setgender = this.gender == 'male' ? 'blue' : 'pink'
  console.log(this.setgender)
  }
}
