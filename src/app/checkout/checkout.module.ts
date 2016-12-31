import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core'
import {routing} from "./checkout.routing";
import {CheckoutPositionsComponent} from "./checkout-positions.component";
import {CheckoutConfirmComponent} from "./checkout-confirm.component";
import {CheckoutFinishComponent} from "./checkout-finish.component";
import {CustomerService} from "./customer-service";
import {CustomerResolve} from "./customer-resolve";

@NgModule({
  imports     : [CommonModule, routing],
  declarations: [CheckoutPositionsComponent, CheckoutConfirmComponent, CheckoutFinishComponent],
  exports: [CheckoutPositionsComponent],
  providers: [CustomerService, CustomerResolve]
})
export class CheckoutModule {}
