import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core'
import {routing} from './registration.routing';
import {RegistrationComponent} from './components/registration.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RegistrationService} from "./service/registration.service";
import {AccountDataFormComponent} from "./components/account-data-form.component";

@NgModule({
  imports     : [CommonModule, ReactiveFormsModule, routing],
  declarations: [RegistrationComponent, AccountDataFormComponent],
  exports: [RegistrationComponent, AccountDataFormComponent],
  providers: [RegistrationService]
})
export class RegistrationModule {}
