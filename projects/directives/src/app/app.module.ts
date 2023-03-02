import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightedDirective } from './ejemplo/highlighted.directive';
import { PruebaComponent } from './prueba/prueba.component';
import { CustomStructuralDirective } from './custom-structural.directive';
import { ResaltarDirective } from './resaltar.directive';
import { CardComponent } from './card/card.component';
import { BitacoraDirective } from './bitacora.directive';
import { MyIfDirective } from './my-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    CardComponent,
    BitacoraDirective,
    MyIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
