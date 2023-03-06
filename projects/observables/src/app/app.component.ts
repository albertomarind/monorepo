import { Component, OnInit } from '@angular/core';
import {
  ajaxRequest,
  customFilter,
  customMap,
  ejecutarObservable,
  getFirstImageFromProducts
} from "projects/observables/src/app/callbacks";
import { fromEvent, map, Observable, Subscriber, Subscription, tap } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'observables';
  products = [];

  ngOnInit(): void {


    getFirstImageFromProducts().subscribe((resp: string[]) => console.log(resp));

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
}
