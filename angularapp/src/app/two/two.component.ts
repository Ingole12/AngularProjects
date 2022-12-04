import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  textvar:string;
  newtext=[];

  onClick(){
    this.newtext.push(this.textvar);
  }

  clear(){
    this.textvar='';
  }
inde;
  remove(val){
   this.inde= this.newtext.indexOf(val);
   if (this.inde>-1) {
    this.newtext.splice(this.inde,1);
   }
  }
  constructor() { }

  ngOnInit() {
  }

}
