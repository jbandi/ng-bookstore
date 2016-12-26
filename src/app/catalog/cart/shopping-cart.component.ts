import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'bs-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {
  private positions;

  constructor(private cartService: CartService) {
    this.positions = this.cartService.getPositions();
  }

  ngOnInit() {
  }

}
