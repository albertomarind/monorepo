import { Component, Input } from '@angular/core';
import { CarritoService } from "projects/observables/src/app/carrito.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  @Input()
  producto!: any;

  constructor(private carritoService: CarritoService) {
  }

  agregarAlCarrito(){
    this.carritoService.agregarProducto(this.producto);
  }

}
