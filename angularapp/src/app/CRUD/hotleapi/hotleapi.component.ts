import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../rapidapi.service';

@Component({
  selector: 'app-hotleapi',
  templateUrl: './hotleapi.component.html',
  styleUrls: ['./hotleapi.component.css']
})
export class HotleapiComponent implements OnInit {

  hotelCom:any[]=[];
  constructor(private _rapid:RapidapiService) { }

  ngOnInit() {
       this._rapid.getDataHotelCom().subscribe( res =>{
      console.log(res);
      this.hotelCom=res;
      console.log(this.hotelCom);
      
    })
  }

}
