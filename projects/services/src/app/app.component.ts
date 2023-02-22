import {Component, OnInit} from '@angular/core';
import {FetchService} from "./fetch.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'services';

  constructor(private fetchService: FetchService) {
  }

  ngOnInit(): void {
    this.fetchService.getProducts()
      .then(
        (response: Response) => response.json())
      .then(
        (products: any[]) => {
          console.log(products);
        }
      ).catch(
      (error: any) => {
        console.error(error);
      }).finally(
      () => {
        console.log('Completada');
      }
    )
    this.fetchService.getAsyncProducts()
      .then((products: any[]) => console.log(products));

    this.getProducts();
  }

  async getProducts() {
    let products = await this.fetchService.getAsyncProducts();
    console.log(products);
  }
}
