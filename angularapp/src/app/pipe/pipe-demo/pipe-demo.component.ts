import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  toudayDate=new Date();
  obser;
  price:number=800000;
  obj={id:'101',name:'Test1'}
  constructor(private _utilityService:UtilityService) {
    this.obser=_utilityService.userName;
   }

  ngOnInit() {
  }

} 
