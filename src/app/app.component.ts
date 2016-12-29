import { Component } from '@angular/core';
import {CatalogService} from "./catalog/catalog.service";
import {CartService} from "./catalog/cart.service";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CatalogService, CartService]
})
export class AppComponent {

  constructor(private authService: AuthService, private router: Router) {}

  goToLogin(){
    this.authService.redirectUrl = '';
    this.router.navigate(['login'])
  }

}
