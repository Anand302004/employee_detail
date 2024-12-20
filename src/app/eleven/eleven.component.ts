import { Component } from '@angular/core';

@Component({
  selector: 'app-eleven',
  templateUrl: './eleven.component.html',
  styleUrls: ['./eleven.component.css']
})
export class ElevenComponent {
info={
  name:'anand',
  age:21,
  mobile_no:9834569900
}
info2={
  name: 'dj',
  age:22,
  mobile_no:7350338665
}
demo=this.info
demo2={...this.info2}
constructor(){
  this.demo.name='vishal'
  this.demo.age=25
  this.demo2.name='pranav'
this.demo2.age=20
console.log(this.addition(50,20,30,60,85));
  console.log(this.addition(50,120,300,400,500));
  
}



addition(...var1:number[]) {
  let j=0;
  for (let index = 0; index < var1.length; index++) {
    j=j+var1[index]
    
  }
  return j;
}

}
