import { Component } from '@angular/core';

@Component({
  selector: 'app-nine',
  templateUrl: './nine.component.html',
  styleUrls: ['./nine.component.css']
})
export class NineComponent {
imgulrs=['https://hdqwalls.com/wallpapers/sunset-nature-trees-img.jpg','https://th.bing.com/th/id/OIP.8wZSC4-c5BJ8YX4knb1k2AHaE7?w=1920&h=1279&rs=1&pid=ImgDetMain','https://wallup.net/wp-content/uploads/2016/02/18/286966-nature-photography.jpg']
types=['text','number','text']
placeholders=['name', 'age' ,'mobile_no']
color=['red', 'yellow','orange','skyblue']
color2=['yellow','orange','skyblue','red']
radius2=[20,30,40,50]
number:any=[]
num=0
total=0
persentage=0
  add(){
    this.number.push(this.num);
  }
  per(){
    for (let index = 0; index < this.number.length; index++) {
      this.total= this.total+this.number[index]
    }
    this.persentage=this.total/this.number.length
  }
  cls=['p1','p2','p3']
}

