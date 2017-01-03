import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountComponent} from "./components/account.component";
import {CustomerResolve} from "../checkout/service/customer-resolve";

const shoppingCartRoutes: Routes = [
    {
        path: '', component: AccountComponent, resolve: {customer: CustomerResolve}
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(shoppingCartRoutes);
