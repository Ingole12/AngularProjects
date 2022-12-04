import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../models/procuct';
// import { table } from 'console';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges,DoCheck {
  // @Input() userid: number;
  @Input() cars:any[]=[];
  @Input() parentData:string;
  @Input() product:Product;
  pi;
  constructor() {
    this.pi = 3.14;
    console.log("HooksComponent constructor called");
   }
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    console.log('ngDocheck called');
    
  }
   
  ngOnChanges(changes: SimpleChanges): void {

    console.log("HooksComponent ngOnChanges called");
    // console.log(this.parentData);
    
    for (const propname in changes) {
      const prop = changes[propname];
      const {previousValue, currentValue, firstChange} = prop;
      // for (const avc in this.cars) {
      //   console.table(avc);
      // }
      console.table(`Property Name @Input:${propname}`);
      console.table(`Previous value: ${previousValue}`);
      console.table(`Current value: ${currentValue}`);
      console.log(`First change: ${firstChange}`);
      console.log("-----------------------*****------------------------")
    }
  }
   // hooks 
  ngOnInit() {
    console.log("HooksComponent ngOnInit called");
    // console.log(this.cars);
    //call api  
  }
}