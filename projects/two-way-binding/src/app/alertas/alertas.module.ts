import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from "projects/two-way-binding/src/app/alertas/services/message.service";
import { AlertaComponent } from './components/alerta/alerta.component';

@NgModule({
  declarations: [
    AlertaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertaComponent
  ],
  providers:[
    MessageService
  ],
})
export class AlertasModule {
}
