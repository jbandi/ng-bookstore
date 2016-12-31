export class PurchaseOrder {
  customerNr: string = '1';
  items: PurchaseOrderItem[] = [];
}

export class PurchaseOrderItem {
  id: string;
  bookInfo: BookInfo;
  quantity: number = 1;
  price: number;
}

export class BookInfo {
  isbn: string;
  title: string;
  price: number
}
