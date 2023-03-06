import { map, Observable, Subscriber, tap } from "rxjs";

export function ajaxRequest(funcionRetorno: ((arg0: any) => void)) {
  let xhr: XMLHttpRequest = new XMLHttpRequest();
  xhr.onload = function () {
    funcionRetorno(JSON.parse(xhr.response));
  };
  xhr.open('GET', 'https://dummyjson.com/products');
  xhr.send();
}

export function customMap(array: any[], callback: (value: any, index: number, array: any[]) => any) {
  let newArray: any[] = [];
  for (let index = 0; index < array.length; index++) {
    let newVal = callback(array[index], index, array);
    newArray.push(newVal);
  }
  return newArray;
}

export function customFilter(array: any[], callback: (value: any, index: number, array: any[]) => any) {
  let newArray: any[] = [];
  for (let index = 0; index < array.length; index++) {
    let isTrue = callback(array[index], index, array);
    if (isTrue) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}

export function ejecutarObservable() {

  const observable: Observable<number> = new Observable<number>((subscriber: Subscriber<number>) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    subscriber.complete();
  });

  observable.subscribe(
    {
      next: (number: number) => {
        console.log(number);
      },
      error: () => {

      },
      complete: () => {
        console.log('Se ha completado');
      }
    }
  );

}

export function getFirstImageFromProducts():Observable<string[]> {
  return new Observable<string[]>((subscriber: Subscriber<any>) => {
    try {
      let xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.onload = function () {
        subscriber.next(xhr.response);
      };
      xhr.open('GET', 'https://dummyjson.com/products');
      xhr.send();
    } catch (error) {
      subscriber.error('Error')
    }
  }).pipe(
   // tap((resp) => console.log(resp)),
    map((resp: any) => JSON.parse(resp).products),
   // tap((resp) => console.log(resp)),
    map((resp: any[]) => {
      return resp.map((r: any) => r.images[0]);
    }),
    //tap((resp) => console.log(resp)),
  );
}

