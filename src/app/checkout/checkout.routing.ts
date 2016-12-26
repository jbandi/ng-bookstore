import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CheckoutComponent} from "./checkout.component";

export const shoppingcartRoutes: Routes = [
    {
        path: '',
        component: CheckoutComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(shoppingcartRoutes);
