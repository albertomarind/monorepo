import {
  AfterViewInit, Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener, Input,
  OnChanges,
  Output,
  SimpleChanges, ViewChild
} from '@angular/core';
import { CardComponent } from "projects/directives/src/app/card/card.component";

@Directive({
  selector: '[appResaltar]',
})
export class ResaltarDirective {

  @Input()
  nuevoTexto!:string;

  @Output()
  onEmmit: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('style.width')
  width: string = '200px';

  // @HostBinding('className')
  // miClase:string = 'resaltar';

  @HostBinding('class.resaltar')
  aplicar: boolean = false;

  // @HostBinding('style.height')
  // get cssClasses() {
  //   return '200px';
  // }

  // @HostBinding()
  // textContent:string = 'contenido';

  @HostBinding('style.border')
  border:string = '2px solid red';


  @HostListener('click')
  onClick(){
    console.log(this.nuevoTexto);
    this.border = '2px solid green';
    // this.element.nativeElement.style.backgroundColor = 'black';
    // this.element.nativeElement.style.color = 'white';
    this.component.texto = 'nuevo texto desde la directiva';

  }

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    // console.log(event);
    // console.log('Se ejecuta')
    // this.aplicar = true;
    // this.onEmmit.next(this.component.texto);
  }

  @HostListener('mouseleave')
  onMouseleave() {
    console.log('Se ejecuta')
    this.aplicar = false;
  }

  constructor(private element:ElementRef, private component: CardComponent) {

  }


}
