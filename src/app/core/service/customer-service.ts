import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import {ICustomer} from "../model/customer";
import {BookstoreHttpClientService} from "./bookstore-http-client.service";
import {AuthService} from "./auth.service";
import {URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class CustomerService {

  constructor(private authService: AuthService, private http: BookstoreHttpClientService) {}

  getLoginCustomer() : Observable<ICustomer>{
    const login = this.authService.getLogin();

    if (login) {

      const params = new URLSearchParams();
      params.set('email', login.email);

      return this.http.get('customers',  { search: params })
        .map(response => response.json() as ICustomer);
    }
    else {
      throw 'User is not logged in!';
    }
  }
}
