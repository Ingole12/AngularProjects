import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-assin',
  templateUrl: './pipe-assin.component.html',
  styleUrls: ['./pipe-assin.component.css']
})
export class PipeAssinComponent implements OnInit {


  visitor:any=[
    {id:1,name:'Ravi',genders:'Male',dob:'12-9-2001',city:'Agra'},
    {id:2,name:'Priya',genders:'Female',dob:'03-04-1980',city:'Moscow'},
    {id:3,name:'Neha',genders:'Female',dob:'1-8-1997',city:'Delhi'},
    {id:4,name:'Yashraj',genders:'Male',dob:'11-1-1999',city:'Mumbai'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
