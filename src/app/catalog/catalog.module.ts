import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {ShoppingCartComponent} from "./components/shopping-cart.component";
import {CatalogComponent} from "./components/catalog.component";
import {OrderItemComponent} from "./components/order-item.component";

@NgModule({
  imports     : [CommonModule, RouterModule, FormsModule],
  declarations: [CatalogComponent, ShoppingCartComponent, OrderItemComponent],
  exports: [CatalogComponent, ShoppingCartComponent, OrderItemComponent],
})
export class CatalogModule {}
