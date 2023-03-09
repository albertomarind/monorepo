import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CarritoService } from "projects/observables/src/app/carrito.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit, OnDestroy {

  productos: any = [];
  subs!: Subscription;

  constructor(private carritoService: CarritoService) {
  }

  ngOnInit(): void {
    this.subs = this.carritoService.obtenerProductos().subscribe(
      (productos) => {
        this.productos = productos;
      }
    );
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}
