import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core'
import {routing} from "./account.routing";
import {AccountOverviewComponent} from './components/account-overview.component';
import {AccountEditComponent} from './components/account-edit.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {RegistrationFormComponent} from "./components/account-data-form.component";
import {RegistrationComponent} from "./components/registration.component";
import {RegistrationService} from "./service/registration.service";
import {AccountOverviewDetailsComponent} from "./components/account-overview-details.component";
import {AccountOverviewOrdersComponent} from "./components/account-overview-orders.component";
import {OrderService} from "./service/order.service";

@NgModule({
  imports     : [CommonModule, FormsModule, ReactiveFormsModule, routing],
  declarations: [AccountOverviewComponent, AccountEditComponent, RegistrationComponent,
    RegistrationFormComponent, AccountOverviewDetailsComponent, AccountOverviewOrdersComponent],
  providers: [RegistrationService, OrderService]
})
export class AccountModule {}
