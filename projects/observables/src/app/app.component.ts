import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ajaxRequest,
  customFilter, customInterval,
  customMap,
  ejecutarObservable,
  getFirstImageFromProducts
} from "projects/observables/src/app/callbacks";
import { CarritoService } from "projects/observables/src/app/carrito.service";
import {
  concatMap,
  filter,
  first,
  fromEvent,
  interval,
  map,
  Observable,
  of,
  Subscriber,
  Subscription,
  take,
  tap
} from "rxjs";
import { ajax } from "rxjs/ajax";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'observables';
  products = [];
  subs!: Subscription;

  productos$!: Observable<any[]>;

  constructor(private carritoService: CarritoService) {
  }

  ngOnInit() {

    this.productos$ = this.carritoService.obtenerProductos();
    //let xhr:any = await ajax('https://jsonplaceholder.typicode.com/posts/1').toPromise();

    //console.log(xhr.response)
    // ajax('https://jsonplaceholder.typicode.com/posts/1').pipe(
    //   tap((xhr) => console.log(xhr)),
    //   concatMap((xhr: any) => {
    //     return ajax('https://jsonplaceholder.typicode.com/users/' + xhr.response.userId);
    //   }),
    //   tap((xhr) => console.log(xhr)),
    // ).subscribe(
    //   {
    //     next: (xhr) => {
    //       console.log(xhr.response);
    //     }
    //   }
    // );


    // const obs$ = ajax('https://api.github.com/users?per_page=5');
    // const obs$ = of(5, [1, 3], {persona: 'jose'}, true, function () {
    //   console.log('Console log de la funcion')
    // }, 5);
    // const obs$ = interval(1000);
    // this.subs = obs$.subscribe({
    //   next: value => {
    //     console.log('entra aca', value);
    //     if(typeof value === "function"){
    //       //value();
    //     }
    //   },
    //   error: err => console.log('Ocurrio un error: ', err)
    // });


    // const observable$: Observable<number> = customInterval().pipe(
    //   //tap((value: number) => console.log(value)),
    //   map((value: number) => value + 1),
    //   filter((value: number) => {
    //     return value === 3;
    //   })
    // );
    // const subscription: Subscription = observable$.subscribe(
    //   {
    //     next: (value: number) => {
    //       //console.log(value);
    //     },
    //     error: (error: any) => {
    //       console.error(error);
    //     },
    //     complete: () => {
    //
    //     }
    //   }
    // );
    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, 5000);


    //getFirstImageFromProducts().subscribe((resp: string[]) => console.log(resp));

    // const observable: Observable<any> = new Observable<number>((subscriber: Subscriber<any>) => {
    //   try {
    //     let xhr: XMLHttpRequest = new XMLHttpRequest();
    //     xhr.onload = function () {
    //       subscriber.next(xhr.response);
    //     };
    //     xhr.open('GET', 'https://dummyjson.com/products');
    //     xhr.send();
    //   } catch (error) {
    //     subscriber.error('Error')
    //   }
    // }).pipe(
    //   tap((resp)=>console.log(resp)),
    //   map((resp: any) => JSON.parse(resp).products),
    //   tap((resp)=>console.log(resp)),
    //   map((resp:any[])=> {
    //     return resp.map((r:any)=>r.images[0]);
    //   }),
    //   tap((resp)=>console.log(resp)),
    // );
    //
    // let observer = {
    //   next: (resp: any) => {
    //     console.log(resp);
    //   },
    //   error: (error: any) => {
    //     console.error(error);
    //   },
    //   complete: () => {
    //     console.log('Se ha completado');
    //   }
    // };
    //
    // observable.subscribe({
    //   next: (resp: any) => {
    //     //console.log(resp);
    //   },
    //   error: (error: any) => {
    //     console.error(error);
    //   },
    //   complete: () => {
    //     console.log('Se ha completado');
    //   }
    // });


    // document.addEventListener('click', () => console.log('Clicked!'));

    // let observer = {
    //   next: (event:any) => {
    //     console.log(event);
    //   },
    //   error: (error:any) => {
    //       console.error(error);
    //   },
    //   complete: () => {
    //       console.info('Completed');
    //   }
    // }
    //
    // let obs: Observable<any> = fromEvent(document, 'click').pipe(
    // );
    // obs.subscribe(observer);

    // ajaxRequest(
    //   (response) => {
    //     this.products = response.products;
    //     // (Array.prototype as any).myCustomMap = function(callback: (value: any, index: number, array: any[]) => any){
    //     //   let newArray: any[] = [];
    //     //   for (let index = 0; index < this.length; index++) {
    //     //     let newVal = callback(this[index], index, this);
    //     //     newArray.push(newVal);
    //     //   }
    //     //   return newArray;
    //     // }
    //     //let onlyTitles: string[] = this.products.map((product: any) => product.title);
    //     //let onlyTitles: string[] = customMap(this.products, (product: any) => product.title);
    //    let products:any[] = customFilter(this.products,(product:any)=>product.stock < 50);
    //     console.log(products);
    //   }
    // );
  }

  manejadorRespuesta(response: any) {
    console.log(JSON.parse(response));
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
