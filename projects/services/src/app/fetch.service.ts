import {Injectable} from '@angular/core';

@Injectable()
export class FetchService {

  constructor() {
  }

  getProducts(): Promise<Response> {
    return fetch('https://dummyjson.com/products');
  }

  async getAsyncProducts() {
    let response = await fetch('https://dummyjson.com/products');
    let products  = await response.json();
    return products;
  }
}
