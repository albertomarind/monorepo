import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

 // isVisible:boolean = false;

  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  } //*appMyIf="variable"

  // @Input() set appMyIf(valor: {id:number,name:string}) {
  //   if (valor.id === 1) {
  //     this.viewContainer.createEmbeddedView(this.template);
  //   } else {
  //     this.viewContainer.clear();
  //   }
  // }

  // @Input() set appMyIf(rol: 'admin' | 'user') {
  //   if ( this.isVisible === false && rol === 'admin') {
  //     this.viewContainer.createEmbeddedView(this.template);
  //     this.isVisible = true;
  //   } else {
  //     this.viewContainer.clear();
  //     this.isVisible = false;
  //   }
  // }

  @Input() set appMyIf(rol: 'admin' | 'user') {
    if ( rol === 'admin') {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }

}
