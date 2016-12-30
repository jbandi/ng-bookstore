import {Component} from '@angular/core';
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
    this.authService.login(username, password).subscribe(success => {
        if (success) {
          this.setMessage();
          if (this.authService.getLogin()) {
            let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
            this.router.navigate([redirect]);
            this.authService.redirectUrl = '';
          }
        }
        else {
          this.message = "Login failed!";
        }

      },
      error => {
        this.message = "Login failed!";
      });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
