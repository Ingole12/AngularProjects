import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustdir]'
})
export class CustdirDirective {

  constructor(private el:ElementRef , private render:Renderer2) {
    console.log('custom directive applied');

    // el.nativeElement.style.backgroundColor = 'red';
    render.setStyle(el.nativeElement,'backgroundColor','yellow')
   }

}
