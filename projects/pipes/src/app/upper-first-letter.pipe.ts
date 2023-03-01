import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperFirstLetter'
})
export class UpperFirstLetterPipe implements PipeTransform {

  transform(value: string): string {
    let arrayStrings: string[] = value.split('');
    arrayStrings[0] = arrayStrings[0].toUpperCase();
    return arrayStrings.toString().replaceAll(',','');
  }

}
