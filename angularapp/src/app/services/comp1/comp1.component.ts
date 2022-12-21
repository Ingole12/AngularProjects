import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  userName; 
  productdata;
  myReactiveForm:FormGroup;
  
  constructor(private _uitilityService:UtilityService) { 
    this._uitilityService.userName.subscribe(res=>{
      this.userName=res;
    });
    this.productdetail();
  }

  ngOnInit() {
  }
  productdetail(){
     this.myReactiveForm= new FormGroup({
      'productName':new FormControl('',[]),
      'unitCost':new FormControl('',[]),
      'quantity':new FormControl('',[]),
      'orderDate':new FormControl('',[])
     });     
  }

  submit(){
    // console.log(this.myReactiveForm.value);
    this.productdata=this.myReactiveForm.value;
    console.log(this.productdata);
    
    // this.userName=this.myReactiveForm.value;
    this._uitilityService.userName.next(this.productdata);
  }

  // updateUserName(uname){
  //   console.log(uname.value);
  //   this._uitilityService.userName.next(uname.value)
  // }
}
