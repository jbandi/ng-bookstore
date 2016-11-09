import {Routes} from "@angular/router";

import {CatalogComponent} from "./catalog/catalog.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: CatalogComponent},
  // {path: 'about', component: ShoppintCartComponent}

];
