import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CheckoutPositionsComponent} from "./components/checkout-positions.component";
import {CheckoutConfirmComponent} from "./components/checkout-confirm.component";
import {CheckoutFinishComponent} from "./components/checkout-finish.component";
import {CustomerResolve} from "./service/customer-resolve";

export const checkoutRoutes: Routes = [
    {
        path: '',
        children: [
          {path: 'positions', component: CheckoutPositionsComponent, resolve: {customer: CustomerResolve}},
          {path: 'confirm', component: CheckoutConfirmComponent},
          {path: 'finish', component: CheckoutFinishComponent},
          {path: '', redirectTo: 'positions', pathMatch: 'full'}
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(checkoutRoutes);
