import { Component } from '@angular/core';

@Component({
  selector: 'app-ten',
  templateUrl: './ten.component.html',
  styleUrls: ['./ten.component.css']
})
export class TenComponent {
  product=''
  price=0
  quantity=0
  gstrate=0
  totalgst=0
  totalamount=0
productname:any=[]
prices:any=[]
quantitys:any=[]
gstrates:any=[]
prices2:any=[]


addtable(){
  this.totalgst=(this.price*this.quantity)*this.gstrate
  this.totalamount=(this.price*this.quantity)+this.totalgst
  this.prices2.push(this.price)
  this.prices.push(this.totalamount)
  this.quantitys.push(this.quantity)
  this.gstrates.push(this.gstrate)
  console.log(this.totalgst)
  console.log(this.totalamount)
  for (let i = 0; i <= this.productname.length; i++) {
   if (this.product==this.productname[i]) {
    this.quantitys[i]+=this.quantity
    this.productname[i].pop()
   }
  }
 
  this.productname.push(this.product)
  this.prices.push(this.totalamount)
}
}
