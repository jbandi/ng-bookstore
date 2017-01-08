import {Component} from '@angular/core';
import {CatalogService} from "../../catalog/service/catalog.service";
import {CartService} from "../../catalog/service/cart.service";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'bs-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(private authService: AuthService,
              private cartService: CartService,
              private router: Router)
  {}

  goToLogin(){
    this.authService.redirectUrl = '';
    this.router.navigate(['login'])
  }

  getCartItemCount(){
    return this.cartService.getPurchaseOrderItems().length;
  }

}
