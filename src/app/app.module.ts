import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";

import {routes} from "./app.routes";
import {CatalogModule} from "./catalog/catalog.module";
import {AppComponent} from './app.component';
import {LoggedInGuard} from "./core/service/logged-in-guard.service";
import {AuthService} from "./core/service/auth.service";
import {LoginComponent} from "./core/components/login.component";
import {BookstoreHttpClientService} from "./core/service/bookstore-http-client.service";
import {BookstoreCoreModule} from "./core/bookstore-core.module";
import {catalogRouting} from "./catalog/catalog.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BookstoreCoreModule,
    CatalogModule,
    catalogRouting
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
