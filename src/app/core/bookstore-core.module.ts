import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core'
import {BookstoreHttpClientService} from "./service/bookstore-http-client.service";
import {LoggedInGuard} from "./service/logged-in-guard.service";
import {AuthService} from "./service/auth.service";
import {LoginComponent} from "./components/login.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {CustomerResolve} from "./service/customer-resolve";
import {CustomerService} from "./service/customer-service";
import {HeaderComponent} from "./components/header.component";

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, HttpModule],
  declarations: [HeaderComponent, LoginComponent],
  exports: [HeaderComponent, LoginComponent],
  providers: [AuthService, LoggedInGuard, BookstoreHttpClientService, CustomerService, CustomerResolve],
})
export class BookstoreCoreModule {
}
