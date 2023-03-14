import { Component } from '@angular/core';
import { Status } from "projects/two-way-binding/src/app/alertas/models/message.interface";
import { MessageService } from "projects/two-way-binding/src/app/alertas/services/message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'two-way-binding';

  showModal: boolean = false;

  constructor(private messageService: MessageService) {
  }

  showAlert() {
    this.messageService.show({
      show: true,
      status: Status.Success,
      message: 'Es un mensaje de prueba'
    });
  }
}
