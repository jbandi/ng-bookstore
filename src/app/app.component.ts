import { Component } from '@angular/core';
import {CatalogService} from "./catalog/service/catalog.service";
import {CartService} from "./catalog/service/cart.service";
import {AuthService} from "./core/service/auth.service";
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
