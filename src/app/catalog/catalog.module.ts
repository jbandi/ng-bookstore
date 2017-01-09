import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {ShoppingCartComponent} from "./components/shopping-cart.component";
import {CatalogComponent} from "./components/catalog.component";

@NgModule({
  imports     : [CommonModule, RouterModule, FormsModule],
  declarations: [CatalogComponent, ShoppingCartComponent],
  exports: [CatalogComponent, ShoppingCartComponent]
})
export class CatalogModule {}
