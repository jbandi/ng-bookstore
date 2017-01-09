import {Component, OnInit} from '@angular/core';
import {CatalogService} from "../service/catalog.service";
import {Book} from "../../core/model/book";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'bs-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {

  private results;

  constructor(private catalogService: CatalogService, private cartService: CartService) {
  }

  ngOnInit() {
    this.search('java');
  }

  search(term: string) {
    this.catalogService.search(term)
      .subscribe(
        res => this.results = res
      );
  }

  addToCart(book: Book) {
    this.cartService.addPosition(book);
  }

}
