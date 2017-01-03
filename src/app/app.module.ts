import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";

import {routes} from "./app.routes";
import {CatalogModule} from "./catalog/catalog.module";
import {AppComponent} from './app.component';
import {BookstoreCoreModule} from "./core/bookstore-core.module";
import {catalogRouting} from "./catalog/catalog.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    BookstoreCoreModule,
    CatalogModule,
    catalogRouting
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
