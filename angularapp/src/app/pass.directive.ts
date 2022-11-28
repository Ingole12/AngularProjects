import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appPass]'
})
export class PassDirective {
  txone:any;
  txtwo:any;
 

  constructor(private el:ElementRef) {
    console.log("coustome directive applied ");
    this.txone=document.getElementById('one') ;
    this.txtwo=document.getElementById('two') ;
    
    if (el.nativeElement.id == 'one') {
      el.nativeElement.style.backgroundColor='Green';
    }


    // if (this.txone==this.txtwo) {
    //   el.nativeElement.style.backgroundColor='Green';
    // }
    // else{
    //   el.nativeElement.style.backgroundColor='red';
    // }
   }
}
