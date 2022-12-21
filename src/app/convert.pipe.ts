import { Pipe, PipeTransform } from '@angular/core';

type Units = 'mi-km' | 'km-mi';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {
  transform(unit: number, ...args: Units[]): number {
    switch (args[0]) {
      case 'mi-km':
        return unit * 1.60934;

      case 'km-mi':
          return unit / 1.60934;

      default:
        return NaN;
    }
  }
}
