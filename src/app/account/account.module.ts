import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core'
import {routing} from "./account.routing";
import {AccountComponent} from './components/account.component';
import {RegistrationModule} from "../registration/registration.module";

@NgModule({
  imports     : [CommonModule, routing, RegistrationModule],
  declarations: [AccountComponent],
  exports: [AccountComponent],
})
export class AccountModule {}
