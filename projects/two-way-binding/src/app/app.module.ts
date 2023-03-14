import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AlertasModule } from "projects/two-way-binding/src/app/alertas/alertas.module";

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AlertasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
