import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { HighlightedDirective } from "projects/directives/src/app/ejemplo/highlighted.directive";

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements AfterViewInit{

  @Input()
  showButton:boolean = false;

  ngAfterViewInit(): void {
    //this.directive.toggle();
  }

}
