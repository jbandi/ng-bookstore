import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core'
import {routing} from "./shopping-cart.routing";
import {ShoppingCartComponent} from './shopping-cart.component';

@NgModule({
  imports     : [CommonModule, routing],
  declarations: [ShoppingCartComponent],
  exports: [ShoppingCartComponent],
})
export class ShoppingCartModule {}
