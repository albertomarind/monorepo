import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extraerPropiedad',
  pure:false //Para activar la deteccion de cambios en propiedades de objetos o valores de posiciones en arreglos
})
export class ExtraerPropiedadPipe implements PipeTransform {

  transform(value: any, propiedad:string): unknown {
    return value[propiedad];
  }

}
