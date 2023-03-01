import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { PruebaComponent } from "projects/directives/src/app/prueba/prueba.component";

@Directive({
  selector: '[appHighlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  // @Input('appHighlighted')
  // isHighlighted:boolean = false;

  @Input('directiveInput')
  directiveInput: boolean = true;

  @Output()
  toggleHighlight: EventEmitter<PruebaComponent> = new EventEmitter<PruebaComponent>();

  constructor(private component: PruebaComponent) {
    console.log('Directive created')
  }

  // @HostBinding('className')
  // highlighted: string = 'highlighted';

  // @HostBinding('style.width')
  // width:string = '100%';

  // @HostBinding()
  // get cssClasses(){
  //   return 'highlighted';
  // }

  // @HostBinding('class.highlighted')
  // get cssClasses(){
  //   return true;
  // }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.directiveInput;
  }

  // @HostBinding('style.border')
  // get cssClasses(){
  //   return '1px solid gray';
  // }

  @HostBinding('attr.disabled')
  get disabled() {
    return 'true';
  }

  @HostListener('mouseover', ['$event'])
  mouseOver(event: any) {
    //console.log(event);
    this.directiveInput = false;
    this.toggleHighlight.next(this.component);
  }

  // @HostListener('mouseover')
  // mouseOver(){
  //   console.log(this.component.showButton)
  //   this.component.showButton = true;
  //   this.directiveInput = false;
  // }

  @HostListener('mouseleave')
  mouseLeave() {
    this.component.showButton = false;
    this.directiveInput = true;
  }

//Metodo para usuarios externos
  toggle(){
    this.directiveInput = !this.directiveInput;
  }

}
