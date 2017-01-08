import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerResolve} from "../core/service/customer-resolve";
import {CheckoutComponent} from "./components/checkout.component";

const checkoutRoutes: Routes = [
    {
        path: '',
        children: [
          {path: '', component: CheckoutComponent, resolve: {customer: CustomerResolve}}
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(checkoutRoutes);
