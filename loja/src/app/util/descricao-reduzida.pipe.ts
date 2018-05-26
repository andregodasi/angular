import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {

  transform(texto: string, trucarEm: number, iniciarEm: number): string {
    if (texto.length > trucarEm) {
      return texto.substr(iniciarEm, trucarEm) + '...';
    }
    return texto;
  }
}
