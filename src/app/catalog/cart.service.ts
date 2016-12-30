import { Injectable } from '@angular/core';
import {Book} from "../model/book";
import {PurchaseOrderItem, PurchaseOrder, BookInfo} from "../model/order";
import {BookstoreHttpClientService} from "../bookstore-http-client.service";

@Injectable()
export class CartService {

  private purchaseOrder: PurchaseOrder;

  constructor(private http: BookstoreHttpClientService) { }

  addPosition(book: Book){

    if(!this.purchaseOrder){
      this.purchaseOrder = new PurchaseOrder()
    }

    const purchaseOrderItem = new PurchaseOrderItem();

    const bookInfo = new BookInfo();
    purchaseOrderItem.bookInfo = bookInfo;

    bookInfo.isbn = book.isbn;
    bookInfo.title = book.title;
    bookInfo.price = book.price;

    this.purchaseOrder.items.push(purchaseOrderItem);
  }

  getPurchaseOrderItems(): PurchaseOrderItem[] {
    return this.purchaseOrder ? this.purchaseOrder.items : [];
  }

  getPurchaseOrder(): PurchaseOrder{
    return this.purchaseOrder;
  }

  sendOrder() {
    return this.http.post('orders', this.purchaseOrder)
  }
}
