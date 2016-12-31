import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountComponent} from "./components/account.component";

const shoppingCartRoutes: Routes = [
    {
        path: '',
        component: AccountComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(shoppingCartRoutes);
