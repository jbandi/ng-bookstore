import { Component, OnInit } from '@angular/core';
import {CartService} from "../catalog/cart.service";
import {PurchaseOrder} from "../model/order";

@Component({
  selector: 'bs-checkout-positions',
  templateUrl: './checkout-positions.component.html',
})
export class CheckoutPositionsComponent implements OnInit {

  private purchaseOrder: PurchaseOrder;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.purchaseOrder = this.cartService.getPurchaseOrder();
  }

}
