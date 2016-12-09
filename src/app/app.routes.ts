import {Routes} from "@angular/router";

import {CatalogComponent} from "./catalog/catalog.component";

export const routes: Routes = [
  {path: '', redirectTo: 'catalog', pathMatch: 'full'},
  {path: 'catalog', component: CatalogComponent},
  {path: 'cart', loadChildren:  () => System.import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)},
  {path: 'account', loadChildren:  () => System.import('./account/account.module').then(m => m.AccountModule)}
];


