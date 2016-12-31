import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "../core/components/login.component";
import {ShoppingCartComponent} from "./components/shopping-cart.component";
import {CatalogComponent} from "./components/catalog.component";

const catalogRoutes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'login', component: LoginComponent}
];

export const catalogRouting: ModuleWithProviders = RouterModule.forChild(catalogRoutes);
