import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string = ''): any[] {

    if (!items) {
      return [];
    }
    if (!searchText || searchText.length < 3) {
      return items;
    } else {
      searchText = searchText.toLocaleLowerCase();
      return items.filter(it => {
        let fullVal = it.id + it.joke;
        return fullVal.toLocaleLowerCase().includes(searchText);
      });
    }
  }
}

