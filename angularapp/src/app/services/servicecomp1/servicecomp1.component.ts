import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-servicecomp1',
  templateUrl: './servicecomp1.component.html',
  styleUrls: ['./servicecomp1.component.css']
})
export class Servicecomp1Component implements OnInit {

  products = {};
  getdata: any;
  constructor(private serviceobj: DemoService) {

  }

  ngOnInit() {
    this.products = this.serviceobj.newarray;
    this.serviceobj.getUserData().subscribe((data) => {
      console.log(data)
      this.getdata = data
    }
    )
  }
  Onsubmit() {
    this.serviceobj.display();
  }

}
