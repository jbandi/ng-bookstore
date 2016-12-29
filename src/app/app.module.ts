import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";

import {routes} from "./app.routes";
import {CatalogModule} from "./catalog/catalog.module";
import {AppComponent} from './app.component';
import {LoggedInGuard} from "./logged-in-guard.service";
import {AuthService} from "./auth.service";
import {LoginComponent} from "./login.component";
import {BookstoreHttpClientService} from "./bookstore-http-client.service";

@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    CatalogModule
  ],
  providers: [AuthService, LoggedInGuard, BookstoreHttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
