import { Component } from '@angular/core';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent {
  bk_color = ""
  border = ''
  bk_img = ''
  margin = 0
  margin2 = 0
  radius = ''
  imgurl=''
  input=''
  color=''
  addurl(){
    this.imgurl=this.input
     this.color=''
     this.bk_img = ''
  }
  addcolor(){
    this.color=this.input
    this.imgurl=''
    this.bk_img = ''
  }
  setClass(classname: string) {
    this.bk_color = classname
    this.bk_img = ''
    this.imgurl=''
    this.color=''
  }
  setborder(classname: string) {
    this.border = classname
  }
  setimg(classname: string) {
    this.bk_img = classname
    this.bk_color = ""
    this.imgurl=''
  }
  remove() {
    this.bk_color = ""
    this.border = ''
    this.bk_img = ''
    this.margin = 0
    this.margin2 = 0
    this.radius = ''
    this.imgurl=''
    this.color=''
  }
  setmarginleft() {
    this.margin = this.margin + 5;
  }
  removemarginleft() {
    this.margin = this.margin - 5;
  }
  setmargintop() {
    this.margin2 = this.margin2 + 5;
  }
  removemargintop() {
    this.margin2 = this.margin2 - 5;
  }
  setradius(classname: string) {
    this.radius = classname
  }
}
