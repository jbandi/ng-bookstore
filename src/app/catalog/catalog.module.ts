import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {ShoppingCartComponent} from "./cart/shopping-cart.component";
import {CatalogComponent} from "./list/catalog.component";

@NgModule({
  imports     : [CommonModule, RouterModule],
  declarations: [CatalogComponent, ShoppingCartComponent],
  exports: [CatalogComponent, ShoppingCartComponent],
})
export class CatalogModule {}
