import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core'
import {routing} from './registration.routing';
import {RegistrationComponent} from './components/registration.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RegistrationService} from "./service/registration.service";

@NgModule({
  imports     : [CommonModule, ReactiveFormsModule, routing],
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent],
  providers: [RegistrationService]
})
export class RegistrationModule {}
