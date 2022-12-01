import { Component, OnInit } from '@angular/core';

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
  constructor() {
    console.log(this.car);   
   }
  ngOnInit() {    }
}
