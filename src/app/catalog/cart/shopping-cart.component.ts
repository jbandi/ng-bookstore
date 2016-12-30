import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'bs-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {
  private purchaseOrderItems;

  constructor(private cartService: CartService) {
    this.purchaseOrderItems = this.cartService.getPurchaseOrderItems();
  }

  ngOnInit() {
  }

}
