import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustdirDirective } from '../custdir.directive';
// import { CustdirDirective } from '../custdir.directive';


// This is shared module utilitymodule 
@NgModule({
  declarations: [CustdirDirective],
  imports: [
    CommonModule,
    // CustdirDirective
  ],
  exports:[CustdirDirective]
})
export class UtilityModule { }
