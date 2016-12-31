import { Component, OnInit } from '@angular/core';
import {CartService} from "../catalog/cart.service";
import {PurchaseOrder} from "../model/order";
import {ActivatedRoute} from "@angular/router";
import {ICustomer} from "./model/customer";

@Component({
  selector: 'bs-checkout-positions',
  templateUrl: './checkout-positions.component.html',
})
export class CheckoutPositionsComponent implements OnInit {

  private purchaseOrder: PurchaseOrder;
  private customer: ICustomer;

  constructor(private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.customer = this.route.snapshot.data['customer'];
    this.purchaseOrder = this.cartService.getPurchaseOrder();
  }

}
