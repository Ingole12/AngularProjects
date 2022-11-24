import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  username=" ";
  handleClear(){
    this.username=' ';
  }

  check(){
        // this.username==" "?true:false;
        if (this.username==" ") {
          return true; 
        }
        else{
          return false;
        }
        }
  constructor() { 
  }

  ngOnInit() {
  }

}
