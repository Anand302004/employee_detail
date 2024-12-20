import { Component } from '@angular/core';

@Component({
  selector: 'app-forth',
  templateUrl: './forth.component.html',
  styleUrls: ['./forth.component.css']
})
export class ForthComponent {
val1=0
val2=0
cal=0
sign=''


plus(){
  this.cal=this.val1+this.val2
  }
  min(){
    this.cal=this.val1-this.val2
    }
    div(){
      this.cal=this.val1/this.val2
      }
      mul(){
        this.cal=this.val1*this.val2
        }
        mod(){
          this.cal=this.val1%this.val2
          }
}
