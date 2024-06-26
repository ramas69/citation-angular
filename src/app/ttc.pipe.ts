import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ttc',
  standalone: true
})
export class TtcPipe implements PipeTransform {

  transform(price: number): number {
    return price * 1.20;
  }

}
