import { Component } from '@angular/core';
import {CatalogService} from "./catalog/catalog.service";
import {CartService} from "./catalog/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CatalogService, CartService]
})
export class AppComponent {
  title = 'app works!';
}
