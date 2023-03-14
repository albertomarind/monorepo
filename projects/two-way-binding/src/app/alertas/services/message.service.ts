import { Injectable } from '@angular/core';
import { Alert, Status } from "projects/two-way-binding/src/app/alertas/models/message.interface";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class MessageService {
  private subject: BehaviorSubject<Alert> = new BehaviorSubject<Alert>({
    show: false,
    message: '',
    status: Status.Info
  });
  statusMessage$: Observable<Alert> = this.subject.asObservable();

  constructor() {
  }

  show(message: Alert) {
    this.subject.next(message);
  }

  hide() {
    this.subject.next({
      show: false,
      message: '',
      status: Status.Info
    });
  }

  toggle() {
    const message: Alert = this.subject.getValue();
    message.show = !message.show;
    this.subject.next(message);
  }
}
