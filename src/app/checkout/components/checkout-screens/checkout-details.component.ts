import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'bs-checkout-details',
  templateUrl: './checkout-details.component.html',
})
export class CheckoutDetailsComponent  {

  @Input() customer;

}

