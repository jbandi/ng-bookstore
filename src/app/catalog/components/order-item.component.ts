import {Component, Input} from '@angular/core';
import {PurchaseOrderItem} from "../../core/model/order";

@Component({
  selector: 'bs-order-item',
  templateUrl: './order-item.component.html'
})
export class OrderItemComponent {

  @Input() item: PurchaseOrderItem;
  @Input() readonly: boolean = false;
}
