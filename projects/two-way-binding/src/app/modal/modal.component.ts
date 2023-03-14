import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input()
  title: string = '';

  @Input()
  show: boolean = false;

  @Output()
  showChange:EventEmitter<boolean> = new EventEmitter<boolean>();

  close(){
    this.show = false;
    this.showChange.emit(this.show);
  }
}
