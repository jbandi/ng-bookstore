import { Component, OnInit } from '@angular/core';
import {CartService} from "../service/cart.service";
import {PurchaseOrderItem, BookInfo} from "../../core/model/order";

@Component({
  selector: 'bs-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent {
  private purchaseOrderItems;

  constructor(private cartService: CartService) {
    this.purchaseOrderItems = this.cartService.getPurchaseOrderItems();
  }
}
