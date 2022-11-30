import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent implements OnInit {

 cars=[];
    cardetais(value){
      // console.log(value);
       this.cars=value;
    console.log(this.cars);
      }
  constructor() { }

  ngOnInit() {
  }

}
