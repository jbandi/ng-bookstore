import {Routes} from "@angular/router";

import {CatalogComponent} from "./catalog/catalog.component";


export const routes: Routes = [
  {path: '', redirectTo: 'catalog', pathMatch: 'full'},
  {path: 'catalog', component: CatalogComponent},
  {path: 'cart', loadChildren:  './shopping-cart/shopping-cart.module#ShoppingCartModule' },
  {path: 'account', loadChildren:  './account/account.module#AccountModule'}
];


