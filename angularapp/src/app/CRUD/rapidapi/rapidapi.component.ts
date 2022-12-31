import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {

  bbfinaceData:any[]=[];
  // bbfinacenewsData:any[]=[];
  constructor(private _rapidapi:RapidapiService) {  }

  ngOnInit() {
    this._rapidapi.getDataBBFinance().subscribe(data=>{
      console.log(`Rapid Finance Data : ${data}`);
      // this.bbfinaceData.push(data.news);
    this.bbfinaceData=data.news;
      console.log(this.bbfinaceData);
    })  
  }

}
