import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  userName=[];
  constructor(private _uitilityService:UtilityService) { 
    this._uitilityService.userName.subscribe(res =>{
      this.userName.push(res);
    })
    console.log(this.userName);
  }
  ngOnInit() {}
 
  updateUserName(uname){
    console.log(uname.value);
    this._uitilityService.userName.next(uname.value);
  }
}
