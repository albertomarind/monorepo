import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  subject:Subject<number> = new Subject<number>();

  constructor() { }


}
