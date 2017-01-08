import {Component, Input} from '@angular/core';

@Component({
  selector: 'bs-checkout-order',
  templateUrl: './checkout-order.component.html',
})
export class CheckoutOrderComponent  {

  @Input() order;

}

