import {Component, OnInit} from '@angular/core';
import {CatalogService} from "../catalog.service";
import {Book} from "../book";
import {CartService} from "../cart.service";

@Component({
  selector: 'bs-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {

  private results;

  constructor(private catalogService: CatalogService, private cartService: CartService) {
  }

  ngOnInit() {
    // this.search('java');
  }

  search(term: string) {
    this.results = this.catalogService.search(term);
  }

  addToCart(book: Book){
    this.cartService.addPosition(book);
  }

}
