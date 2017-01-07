import { Component, OnInit } from '@angular/core';
import {CartService} from "../service/cart.service";
import {PurchaseOrderItem, BookInfo} from "../../core/model/order";

@Component({
  selector: 'bs-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {
  private purchaseOrderItems;

  constructor(private cartService: CartService) {
    this.purchaseOrderItems = this.cartService.getPurchaseOrderItems();

    // const item = new PurchaseOrderItem();
    // item.bookInfo = new BookInfo();
    // item.bookInfo.title = 'Test Test Test Test';
    // item.bookInfo.price = 50.5;
    // item.bookInfo.isbn = '1234567890';
    // item.quantity = 3;
    //
    // this.purchaseOrderItems = [item];

  }

  ngOnInit() {
  }

}
