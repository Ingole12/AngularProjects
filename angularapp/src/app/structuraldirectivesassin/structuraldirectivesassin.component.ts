import { Component, OnInit } from '@angular/core';
import { Courses } from '../models/courses';

@Component({
  selector: 'app-structuraldirectivesassin',
  templateUrl: './structuraldirectivesassin.component.html',
  styleUrls: ['./structuraldirectivesassin.component.css']
})
export class StructuraldirectivesassinComponent implements OnInit {
   
 
  cour:Courses[]=[{courseName: "SEO",courseDuration:"3-Month's",courseEligibility:"Min 12 pass",fee:20000},
  {courseName: "Machine Learning",courseDuration:"8-Month's",courseEligibility:"Min Graduate pass",fee:20000},
  {courseName: "Cloud Computing",courseDuration:"4-Month's",courseEligibility:"Min Graduate pass",fee:20000},
  {courseName: "Big Data",courseDuration:"6-Month's",courseEligibility:"Min Graduate pass",fee:20000}
]
newValue:string;

getValue(onevalue){
 
  console.log(onevalue.target.value);
  this.newValue=onevalue.target.value;
  
}

isShow:boolean;
ml:boolean;
cm:boolean;
bd:boolean;
empty:boolean;
condi:any=document.getElementById("two");


baseValue(){
  if (this.condi.check==true) 
    {
  if (this.newValue=='SEO') {
    this.isShow=true;
  }
  
}else{
  
}
  if(this.newValue=='Machine Learning') {
    this.ml=true;
  }


  if (this.newValue=='Cloud Computing') {
    this.cm=true;
  }
  if (this.newValue=='Big Data') {
    this.bd=true;
  }
}
  
  constructor() { }

  ngOnInit() {
  }

}
