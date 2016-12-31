import {Routes} from "@angular/router";

import {CatalogComponent} from "./catalog/components/catalog.component";
import {ShoppingCartComponent} from "./catalog/components/shopping-cart.component";
import {LoggedInGuard} from "./core/service/logged-in-guard.service";
import {LoginComponent} from "./core/components/login.component";


export const routes: Routes = [
  {path: '', redirectTo: 'catalog', pathMatch: 'full'},
  {path: 'catalog', component: CatalogComponent},
  {path: 'cart', component:  ShoppingCartComponent},
  {path: 'login', component:  LoginComponent },
  {path: 'account', loadChildren:  './account/account.module#AccountModule', canActivate: [LoggedInGuard]},
  {path: 'checkout', loadChildren:  './checkout/checkout.module#CheckoutModule', canActivate: [LoggedInGuard]}
];


