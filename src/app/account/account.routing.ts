import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountComponent} from "./components/account.component";
import {CustomerResolve} from "../core/service/customer-resolve";
import {RegistrationComponent} from "./components/registration.component";
import {LoggedInGuard} from "../core/service/logged-in-guard.service";

const shoppingCartRoutes: Routes = [
    { path: '', component: AccountComponent, canActivate: [LoggedInGuard], resolve: {customer: CustomerResolve} },
    { path: 'registration', component: RegistrationComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(shoppingCartRoutes);
