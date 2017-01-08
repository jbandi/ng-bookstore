import { Component, OnInit } from '@angular/core';
import {CartService} from "../../catalog/service/cart.service";
import {PurchaseOrder} from "../../core/model/order";
import {ActivatedRoute} from "@angular/router";
import {ICustomer} from "../../core/model/customer";

@Component({
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {

  private checkoutState = CheckoutState; // the enum needs to be exposed to the template
  private currentCheckoutState: CheckoutState = CheckoutState.CONFIRM_DETAILS;
  private purchaseOrder: PurchaseOrder;
  private customer: ICustomer;

  constructor(private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.customer = this.route.snapshot.data['customer'];
    this.purchaseOrder = this.cartService.getPurchaseOrder();

  }

  confirmDetails(){
    this.currentCheckoutState = CheckoutState.CONFIRM_ORDER;
  }

  confirmOrder(){
    this.cartService.sendOrder();
    this.currentCheckoutState = CheckoutState.FINISHED;
  }

}

export enum CheckoutState {
  CONFIRM_DETAILS,
  CONFIRM_ORDER,
  FINISHED
}
