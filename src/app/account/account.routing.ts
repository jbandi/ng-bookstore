import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerResolve} from "../core/service/customer-resolve";
import {RegistrationComponent} from "./components/registration.component";
import {LoggedInGuard} from "../core/service/logged-in-guard.service";
import {AccountOverviewComponent} from "./components/account-overview.component";
import {AccountEditComponent} from "./components/account-edit.component";

const shoppingCartRoutes: Routes = [
    { path: '', component: AccountOverviewComponent, canActivate: [LoggedInGuard], resolve: {customer: CustomerResolve} },
    { path: 'edit', component: AccountEditComponent, canActivate: [LoggedInGuard], resolve: {customer: CustomerResolve} },
    { path: 'registration', component: RegistrationComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(shoppingCartRoutes);
