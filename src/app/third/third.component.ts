import { Component } from '@angular/core';
import { ElevenComponent } from '../eleven/eleven.component';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
  cal=0
  cal2=''
  v1=0
  val1=0
  val2=0
one(){
this.cal2=this.cal2+'1'
}
two(){
  this.cal2=this.cal2+'2'
  }
  three(){
    this.cal2=this.cal2+'3'
    }
    four(){
      this.cal2=this.cal2+'4'
      }
      five(){
        this.cal2=this.cal2+'5'
        }
        six(){
          this.cal2=this.cal2+'6'
          }
          seven(){
            this.cal2=this.cal2+'7'
            }
            eight(){
              this.cal2=this.cal2+'8'
              }
              nine(){
                this.cal2=this.cal2+'9'
                }
                zero(){
                  this.cal2=this.cal2+'0'
                  }
                  plus(){
                    this.cal2=this.cal2+'+'
                    }
                    min(){
                      this.cal2=this.cal2+'-'
                      }
                      div(){
                        this.cal2=this.cal2+'/'
                        }
                        mul(){
                          this.cal2=this.cal2+'*'
                          }
                          mod(){
                            this.cal2=this.cal2+'%'
                            }
                            equal(){
                              this.cal=this.cal+this.cal
                              }
      
}
