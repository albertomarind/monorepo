import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(products: any[], category: string, price: number): any[] {
    return products.filter((product: any) => product.category === category && product.price < price);
  }

}
