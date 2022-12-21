import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
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
  //   this._uitilityService.userName.next(uname.value);
  // }
}
