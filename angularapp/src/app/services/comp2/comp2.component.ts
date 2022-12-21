import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  userName=[];
  constructor(private _uitilityService:UtilityService) { 
    this._uitilityService.userName.subscribe(res =>{
      this.userName.push(res);
    })
    console.log(this.userName); 
  }
  ngOnInit() {}

  // updateUserName(uname){
  //   console.log(uname.value);
  //   this._uitilityService.userName.next(uname.value)
  // }
}
