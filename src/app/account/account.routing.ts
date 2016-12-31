import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountComponent} from "./components/account.component";

export const shoppingcartRoutes: Routes = [
    {
        path: '',
        component: AccountComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(shoppingcartRoutes);
