import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageType'
})
export class PageTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
