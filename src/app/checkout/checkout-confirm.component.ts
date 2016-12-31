import { Component, OnInit } from '@angular/core';
import {CartService} from "../catalog/cart.service";
import {PurchaseOrder} from "../core/model/order";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'bs-checkout-confirm',
  templateUrl: './checkout-confirm.component.html',
})
export class CheckoutConfirmComponent implements OnInit {

  private purchaseOrder: PurchaseOrder;

  constructor(private cartService: CartService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.purchaseOrder = this.cartService.getPurchaseOrder();
  }

  sendOrder(){
    this.cartService.sendOrder()
      .subscribe(
        () => {
          this.router.navigate(['../finish'], {relativeTo: this.route});
        }
        // TODO: Error handling ...
      );
  }
}
