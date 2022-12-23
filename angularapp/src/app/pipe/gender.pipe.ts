import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value:any,gender1:string): any {
      if (gender1.toLowerCase() == "male") {
        return "Mr. " + value;
  }
      else{
        return "Miss. " + value;
      }
    // return null;
  }

}

