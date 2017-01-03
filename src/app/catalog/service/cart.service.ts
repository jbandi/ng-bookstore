import { Injectable } from '@angular/core';
import {Book} from "../../core/model/book";
import {PurchaseOrderItem, PurchaseOrder, BookInfo} from "../../core/model/order";
import {BookstoreHttpClientService} from "../../core/service/bookstore-http-client.service";
import {CustomerService} from "../../core/service/customer-service";

@Injectable()
export class CartService {

  private purchaseOrder: PurchaseOrder;

  constructor(private http: BookstoreHttpClientService, private customerService: CustomerService) { }

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
    return this.customerService.getLoginCustomer()
      .switchMap( currentCustomer => {
        this.purchaseOrder.customerNr = currentCustomer.number;
        return this.http.post('orders', this.purchaseOrder)
      });
  }
}
