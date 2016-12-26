import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core'
import {routing} from "./checkout.routing";
import {CheckoutComponent} from "./checkout.component";

@NgModule({
  imports     : [CommonModule, routing],
  declarations: [CheckoutComponent],
  exports: [CheckoutComponent],
})
export class CheckoutModule {}
