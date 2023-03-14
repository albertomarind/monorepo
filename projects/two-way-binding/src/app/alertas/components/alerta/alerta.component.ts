import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Alert, Status } from "projects/two-way-binding/src/app/alertas/models/message.interface";
import { MessageService } from "projects/two-way-binding/src/app/alertas/services/message.service";

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {
  message: string = '';
  status: Status = Status.Info;
  show: boolean = false;

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messageService.statusMessage$.subscribe((alert: Alert) => {
      this.message = alert.message;
      this.show = alert.show;
      this.status = alert.status;
    });
  }

  close(){
    this.messageService.hide();
  }
}
