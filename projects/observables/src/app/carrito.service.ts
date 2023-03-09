import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  subject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() {
  }

  agregarProducto(producto: any) {
    let productos: any[] = [...this.subject.getValue()];
    productos.push(producto);
    this.subject.next(productos);
  }

  obtenerProductos() {
    return this.subject.asObservable();
  }
}
