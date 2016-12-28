import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core'
import {routing} from "./checkout.routing";
import {CheckoutPositionsComponent} from "./checkout-positions.component";
import {CheckoutConfirmComponent} from "./checkout-confirm.component";

@NgModule({
  imports     : [CommonModule, routing],
  declarations: [CheckoutPositionsComponent, CheckoutConfirmComponent],
  exports: [CheckoutPositionsComponent],
})
export class CheckoutModule {}
