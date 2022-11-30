import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  @Output () getcar:EventEmitter<any>= new EventEmitter<any>();


  car=[
    {cName:"Thar",bName:'Mahindra',cType:'SUV',cEngine:'2184cc',cMilege:'15 kmpl'}
  ]

  onclick(){
   this.getcar.emit(this.car);
  }
  constructor() { }
  ngOnInit() {
    console.log(this.car);
  }
}
