import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShoppingCartComponent} from "./shopping-cart.component";

export const shoppingcartRoutes: Routes = [
    {
        path: '',
        component: ShoppingCartComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(shoppingcartRoutes);
