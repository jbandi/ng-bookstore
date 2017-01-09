export class PurchaseOrder {
  customerNr: string = '1';
  items: PurchaseOrderItem[] = [];

  get totalPrice(){
    return this.items.reduce((sum, t) => sum + t.totalPrice, 0);
  }
}

export class PurchaseOrderItem {
  id: string;
  bookInfo: BookInfo;
  quantity: number = 1;

  decreaseQuantity(){
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity(){
    this.quantity++
  }

  get totalPrice(){
    return this.quantity * this.bookInfo.price;
  }
}

export class BookInfo {
  isbn: string;
  title: string;
  price: number
}
