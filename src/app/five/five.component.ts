import { Component } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent {
  dis1=''
  url=''
dis(){
this.url= 'https://th.bing.com/th/id/OIP.xKiE_jUn8tPueoLWXsyCPgHaEo?rs=1&pid=ImgDetMain '
}
b(){
  this.url=''
  this.dis1='mouse leave : The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for'
}
img(){
  this.dis1=''
this.url='https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-12/laptop-agencies-consulting-website-development-companies.png'
}
img2(){
  this.url='https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg'
}
img3(){
  this.url=''

}
img4(){
  this.url='https://hdqwalls.com/wallpapers/sunset-nature-trees-img.jpg'
}
}
