import { Component, Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'protractor';
import { Courses } from 'src/app/models/courses';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() movies:any[]=[]; 
  @Input() courses:Courses[]=[];
 
  @Output() foodevent: EventEmitter<string> = new EventEmitter<string>();

  // function will call once text boxt value
  getfood(value){
    //foodevent is nothing but custome event 
       this.foodevent.emit(value);
  }
  constructor() {
   }

  ngOnInit() {
    console.log(this.movies);
    console.log(this.courses);
    
  }

}
