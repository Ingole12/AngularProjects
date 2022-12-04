import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/procuct';

@Component({
  selector: 'app-hookparent',
  templateUrl: './hookparent.component.html',
  styleUrls: ['./hookparent.component.css']
})
export class HookparentComponent implements OnInit {
 uid:number;
car=[
  {cName:'Venue',bName:'Hyundai'},
  {cName:"Swift",bName:'Maruti Suzuki'},
  {cName:"Altroz" ,bName:'Tata'},
  {cName:"Thar",bName:'Mahindra'}
  // ,cType:'SUV',cEngine:'2184cc',cMilege:'15 kmpl'
]
data;
name:string;
price:number;
product:Product=new Product();

handaledata(value){
  this.data=value.target.data;
}

updateProduct(){
  this.product.name=this.name;
  this.product.price=this.price;
}
  constructor() {
    console.log(this.car);   
   }
  ngOnInit() {    }
}
