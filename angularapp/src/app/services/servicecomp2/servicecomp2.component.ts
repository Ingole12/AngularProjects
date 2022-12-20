import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-servicecomp2',
  templateUrl: './servicecomp2.component.html',
  styleUrls: ['./servicecomp2.component.css']
})
export class Servicecomp2Component implements OnInit {
  products:any={};
  constructor(private serviceobj:DemoService) { }

  ngOnInit() {
    this.products=this.serviceobj.newarray;
  }
  Onsubmit(){
    this.serviceobj.display();
  }

}
