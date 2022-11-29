import { Component, Input, OnInit } from '@angular/core';
import { Courses } from 'src/app/models/courses';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() movies:any[]=[]; 
  @Input() courses:Courses[]=[];
 
  constructor() {
    
   }

  ngOnInit() {
    console.log(this.movies)
  }

}
