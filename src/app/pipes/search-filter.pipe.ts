import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    console.log('vacio', searchText);
    if (!items) {
      return [];
    }
    if (!searchText) {
      console.log('vacio');
      return items;
    }

    return items.filter((it) => {
      console.log(it.nombre);
      return it.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    });
  }
}
