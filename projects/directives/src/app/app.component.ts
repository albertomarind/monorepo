import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HighlightedDirective } from "projects/directives/src/app/ejemplo/highlighted.directive";
import { PruebaComponent } from "projects/directives/src/app/prueba/prueba.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  // @ViewChild(HighlightedDirective)
  // directive!:HighlightedDirective
  //
  // title = 'directives';
  //
  // handle(val: PruebaComponent) {
  //   //  setTimeout(()=>{
  //   //    val.showButton = true;
  //   //  },3000);
  //   // }
  // }
  //
  // ngAfterViewInit(): void {
  //   setTimeout(()=>{
  //     this.directive.toggle();
  //   },0)
  // }
  //
  // externalToggle():void{
  //   this.directive.toggle();
  // }

  handle(event:any){
    console.log('Valor emitido:', event);
  }
}
