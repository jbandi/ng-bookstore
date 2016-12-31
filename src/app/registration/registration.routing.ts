import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from './components/registration.component';

const registrationRoutes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: RegistrationComponent}
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(registrationRoutes);
