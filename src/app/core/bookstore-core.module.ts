import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core'
import {BookstoreHttpClientService} from "./service/bookstore-http-client.service";
import {LoggedInGuard} from "./service/logged-in-guard.service";
import {AuthService} from "./service/auth.service";
import {LoginComponent} from "./components/login.component";

@NgModule({
  imports     : [CommonModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthService, LoggedInGuard, BookstoreHttpClientService],
})
export class BookstoreCoreModule {}
