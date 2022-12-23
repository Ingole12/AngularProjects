import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(val:any,SearchTearm:any): any {
    return val.filter(function(search){
      return search.name.toLowerCase().indexOf(SearchTearm.toLowerCase())> -1
    });
    // return null;
  }
}
