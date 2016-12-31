import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core'
import {routing} from "./checkout.routing";
import {CheckoutPositionsComponent} from "./components/checkout-positions.component";
import {CheckoutConfirmComponent} from "./components/checkout-confirm.component";
import {CheckoutFinishComponent} from "./components/checkout-finish.component";
import {CustomerService} from "./service/customer-service";
import {CustomerResolve} from "./service/customer-resolve";

@NgModule({
  imports     : [CommonModule, routing],
  declarations: [CheckoutPositionsComponent, CheckoutConfirmComponent, CheckoutFinishComponent],
  exports: [CheckoutPositionsComponent],
  providers: [CustomerService, CustomerResolve]
})
export class CheckoutModule {}
