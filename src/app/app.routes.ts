import {Routes} from "@angular/router";

import {CatalogComponent} from "./catalog/catalog.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {AccountComponent} from "./account/account.component";

export const routes: Routes = [
  {path: '', redirectTo: 'catalog', pathMatch: 'full'},
  {path: 'catalog', component: CatalogComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'account', component: AccountComponent}
];
