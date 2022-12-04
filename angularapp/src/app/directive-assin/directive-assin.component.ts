import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-assin',
  templateUrl: './directive-assin.component.html',
  styleUrls: ['./directive-assin.component.css']
})
export class DirectiveAssinComponent implements OnInit {

  shoSecreate=false;
  btnarray:number[]=[];
  count=0;
  onToggle(){
    this.shoSecreate=! this.shoSecreate;
    this.btnarray.push(this.btnarray.length + 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
