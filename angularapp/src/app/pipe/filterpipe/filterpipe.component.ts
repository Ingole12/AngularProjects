import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterpipe',
  templateUrl: './filterpipe.component.html',
  styleUrls: ['./filterpipe.component.css']
})
export class FilterpipeComponent implements OnInit {
  namesearch:string='';
productArr:any[]=[
  {sno:1,name:'Mobile',price:'7000 Rs', availability:'Available'},
  {sno:2,name:'TV',price:'17000 Rs', availability:'Available'},
  {sno:3,name:'Washing Machine',price:'170000 Rs', availability:'Not Available'},
  {sno:4,name:'Tablet',price:'35000 Rs', availability:'Available'},
]
  constructor() { }

  ngOnInit() {
  }

}
