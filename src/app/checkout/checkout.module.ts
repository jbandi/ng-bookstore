import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core'
import {routing} from "./checkout.routing";
import {CustomerService} from "../core/service/customer-service";
import {CustomerResolve} from "../core/service/customer-resolve";
import {CheckoutComponent} from "./components/checkout.component";
import {CheckoutDetailsComponent} from "./components/checkout-screens/checkout-details.component";
import {CheckoutOrderComponent} from "./components/checkout-screens/checkout-order.component";
import {CheckoutConfirmComponent} from "./components/checkout-screens/checkout-confirm.component";

@NgModule({
  imports     : [CommonModule, routing],
  declarations: [CheckoutComponent, CheckoutDetailsComponent, CheckoutOrderComponent, CheckoutConfirmComponent],
  providers: [CustomerService, CustomerResolve]
})
export class CheckoutModule {}
