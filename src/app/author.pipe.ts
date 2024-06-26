import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'author',
  standalone: true
})
export class AuthorPipe implements PipeTransform {

  transform(value: string): string {
    return 'La business sadique: ' +  value;
  }

}
