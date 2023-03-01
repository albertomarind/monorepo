import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBitacora]'
})
export class BitacoraDirective {

  @Input()
  appBitacora!: string;

  @HostListener('click')
  onClick() {
    let data = this.appBitacora;
    //localStorage.clear();

    sessionStorage.setItem('bitacora', `${sessionStorage.getItem('bitacora')}, ${data}`);
    sessionStorage.setItem('elemento', `${sessionStorage.getItem('bitacora')}, ${data}`);
    sessionStorage.setItem('alguna-otra-cosa', `${sessionStorage.getItem('bitacora')}, ${data}`);
    //console.log(sessionStorage.length);
    console.log(sessionStorage.key(0));
  }

  constructor() {
  }

}
