import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  selecteProduct:string;
  getProductValue(ev1){
        console.log(ev1.target.value);
        this.selecteProduct=ev1.target.value;
  }


  constructor() { }

  ngOnInit() {
  }

}
