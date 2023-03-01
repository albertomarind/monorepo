import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: any[] = [
    {
      id: 1,
      name: 'celular',
      category: 'technology',
      price: 49.99,
      image: 'https://cdn.shopify.com/s/files/1/0877/3052/products/OPPOLTECPH2365RENO6LITEplata-1_1000x.jpg?v=1645822223'
    },
    {
      id: 2,
      name: 'celular 2',
      image: 'https://cdn.shopify.com/s/files/1/0877/3052/products/OPPOLTECPH2365RENO6LITEplata-1_1000x.jpg?v=1645822223',
      category: 'technology',
      price: 59.99
    },
    {
      id: 3,
      name: 'Sofa',
      image: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw736adf25/images/1560000/1560164.jpg?sfrm=jpg',
      category: 'home',
      price: 199.99
    }
  ];


  cards: { id: number, category: string }[] = [
    {
      id: 1,
      category: 'BEGINNER'
    },
    {
      id: 2,
      category: 'BEGINNER'
    },
    {
      id: 3,
      category: 'NORMAL'
    },
    {
      id: 4,
      category: 'NORMAL'
    },
    {
      id: 4,
      category: 'NORMAL'
    },
    {
      id: 4,
      category: 'NORMAL'
    },
    {
      id: 5,
      category: 'ADVANCED'
    },
    {
      id: 6,
      category: 'ADVANCED'
    }
  ];

  objeto: any = {
    id: 1,
    nombre: 'Pedro',
    casado: false,
    edad: 15,
    direccion: {
      calle: 'Mi calle',
      estado: 'Mi estado'
    }
  }
}
