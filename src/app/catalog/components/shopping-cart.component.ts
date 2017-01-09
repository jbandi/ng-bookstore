import { Component, OnInit } from '@angular/core';
import {CartService} from "../service/cart.service";
import {PurchaseOrderItem, BookInfo, PurchaseOrder} from "../../core/model/order";

@Component({
  selector: 'bs-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent {
  private purchaseOrder: PurchaseOrder;

  constructor(private cartService: CartService) {
    this.purchaseOrder = this.cartService.getPurchaseOrder();
  }
}
