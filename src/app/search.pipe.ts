import { Pipe, PipeTransform } from '@angular/core';
import { Elixir } from './shared/entities';
import { NumberValueAccessor } from '@angular/forms';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(values: Elixir[], terms:string): Elixir[] {

    if(!terms){
      return values;
    }
    return values.filter( value => value.name.toLowerCase().includes(terms.toLowerCase()));
  }

}
