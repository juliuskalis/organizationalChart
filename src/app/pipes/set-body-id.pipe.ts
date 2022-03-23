import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setBodyId'
})
export class SetBodyIdPipe implements PipeTransform {

  transform(value: string): void {
    let body = document.getElementsByTagName('body').item(0);
    if (body) {
      body.setAttribute('id', value);
    }
  }

}
