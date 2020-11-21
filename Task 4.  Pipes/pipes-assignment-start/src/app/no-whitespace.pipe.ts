import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noWhitespace'
})
export class NoWhitespacePipe implements PipeTransform {

  transform(value: any): any {
    const regex = /\s/g;
    return value.replace(regex, '');
    // alternaitve way: return value.split(' ').join('');
  }

}
