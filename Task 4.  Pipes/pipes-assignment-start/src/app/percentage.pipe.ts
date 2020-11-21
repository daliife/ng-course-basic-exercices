import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(value: any, percentage: number): any {
    if (percentage > 100 || percentage < 0) { percentage = 100; }
    return value * (percentage / 100);
  }

}
