import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tempform } from 'src/app/models/employee';
import { SafeData } from 'src/app/save-data.interface';

@Component({
  selector: 'app-temp-assin',
  templateUrl: './temp-assin.component.html',
  styleUrls: ['./temp-assin.component.css']
})
export class TempAssinComponent implements OnInit {
selopn:string='Advanced';
obj=new tempform();
submitted:boolean=false;
  constructor() { }
 

  ngOnInit() { 
  }
  show(form:NgForm){
    this.submitted=true;
console.log(form);  
  this.obj.email=form.value.email;
  this.obj.subscription=form.value.subscription;
  this.obj.password=form.value.password

  }

}
