import {Component} from '@angular/core';
import {CatalogService} from "../../catalog/service/catalog.service";
import {CartService} from "../../catalog/service/cart.service";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {

  message: string;

  constructor(public authService: AuthService, public router: Router) {}

  login(username: string, password: string) {
    this.message = 'Trying to log in ...';
    this.authService.login(username, password).subscribe(success => {
        if (success) {
          this.message = "Login successful";
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
    this.message = 'Logged out!';
  }

}
