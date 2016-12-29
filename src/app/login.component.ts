import { Component } from '@angular/core';
import {CatalogService} from "./catalog/catalog.service";
import {CartService} from "./catalog/cart.service";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {

  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn() ? 'in' : 'out');
  }

  login(username: string, password: string) {
    this.message = 'Trying to log in ...';
    this.authService.login(username, password).subscribe(() => {
      this.setMessage();
      if (this.authService.getLogin()) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
        // Redirect the user
        this.router.navigate([redirect]);
        this.authService.redirectUrl = '';
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
