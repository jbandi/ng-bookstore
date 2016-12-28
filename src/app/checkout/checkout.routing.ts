import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CheckoutPositionsComponent} from "./checkout-positions.component";
import {CheckoutConfirmComponent} from "./checkout-confirm.component";

export const checkoutRoutes: Routes = [
    {
        path: '',
        children: [
          {path: 'positions', component: CheckoutPositionsComponent},
          {path: 'confirm', component: CheckoutConfirmComponent},
          {path: '', redirectTo: 'positions', pathMatch: 'full'}
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(checkoutRoutes);
