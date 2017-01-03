import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core'
import {routing} from "./account.routing";
import {AccountComponent} from './components/account.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AccountDataFormComponent} from "./components/account-data-form.component";
import {RegistrationComponent} from "./components/registration.component";
import {RegistrationService} from "./service/registration.service";

@NgModule({
  imports     : [CommonModule, ReactiveFormsModule, routing],
  declarations: [AccountComponent, RegistrationComponent, AccountDataFormComponent],
  providers: [RegistrationService, ]
})
export class AccountModule {}
