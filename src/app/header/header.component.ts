import { Component } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
count=0
constructor(public cons:SerService){}
coun(){
  this.count=this.count+1;
  
}
add(){
  this.cons.input++
}
addition(){
  this.cons.add=this.cons.input*this.cons.input
}
}
