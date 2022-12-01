import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appPass]'
})
export class PassDirective {
  txone:any;
  txtwo:any;
 

  constructor(private el:ElementRef) {
    console.log("coustome directive applied ");
 
      el.nativeElement.style.backgroundColor='Green';
  }
}
// This custom directive is used in password.component.html 