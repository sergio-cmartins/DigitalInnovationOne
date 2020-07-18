import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  transform(value: string, charFrom: string, charTo: string) {
    return value.replace(charFrom, charTo);
  }
}
