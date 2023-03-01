import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  private _texto!: string;

  @Input()
  set texto(texto: string) {
    this._texto = texto;
  }

  get texto() {
    return this._texto;
  }
}
