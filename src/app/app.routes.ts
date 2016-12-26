import {Routes} from "@angular/router";

import {CatalogComponent} from "./catalog/list/catalog.component";
import {ShoppingCartComponent} from "./catalog/cart/shopping-cart.component";


export const routes: Routes = [
  {path: '', redirectTo: 'catalog', pathMatch: 'full'},
  {path: 'catalog', component: CatalogComponent},
  {path: 'cart', component:  ShoppingCartComponent},
  // {path: 'cart', loadChildren:  './shopping-cart/shopping-cart.module#ShoppingCartModule' },
  {path: 'account', loadChildren:  './account/account.module#AccountModule'},
  {path: 'checkout', loadChildren:  './checkout/checkout.module#CheckoutModule'}
];


